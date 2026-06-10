package main

import (
	"embed"
	"io"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path"
	"strings"
)

//go:embed frontend/build/*
var distFS embed.FS

func main() {
	mux := http.NewServeMux()

	// === API ===
	mux.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok","time":"` + timeNow() + `"}`))
	})

	mux.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Write([]byte(`{"items":["alpha","beta","gamma"],"count":3}`))
	})

	// === Статика React ===
	mux.Handle("/app/", spaHandler())

	// Редирект с корня
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/app/", http.StatusFound)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Сервер: http://localhost:%s", port)
	log.Printf("API:    http://localhost:%s/api/health", port)
	log.Printf("Web:    http://localhost:%s/app/", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}

// spaHandler раздаёт React-приложение с поддержкой client-side routing
func spaHandler() http.Handler {
	subFS, err := fs.Sub(distFS, "dist")
	if err != nil {
		log.Fatal("ошибка embed FS:", err)
	}

	fileServer := http.FileServer(http.FS(subFS))

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Убираем префикс /app
		urlPath := strings.TrimPrefix(r.URL.Path, "/app")
		if urlPath == "" {
			urlPath = "/"
		}
		urlPath = path.Clean("/" + urlPath)

		// Проверяем существование файла
		filePath := strings.TrimPrefix(urlPath, "/")
		f, err := subFS.Open(filePath)
		if err != nil {
			// Файла нет — отдаём index.html (React Router обработает)
			serveIndex(subFS, w, r)
			return
		}
		defer f.Close()

		stat, err := f.Stat()
		if err != nil || stat.IsDir() {
			serveIndex(subFS, w, r)
			return
		}

		// Отдаём найденный файл
		r.URL.Path = urlPath
		fileServer.ServeHTTP(w, r)
	})
}

func serveIndex(subFS fs.FS, w http.ResponseWriter, r *http.Request) {
	f, err := subFS.Open("index.html")
	if err != nil {
		http.Error(w, "index.html не найден", http.StatusInternalServerError)
		return
	}
	defer f.Close()

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.Copy(w, f)
}

func timeNow() string {
	return "2026-06-10" // упрощённо, используйте time.Now().Format(...)
}
