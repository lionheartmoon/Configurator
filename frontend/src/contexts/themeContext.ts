import { createContext, useContext } from "react";

interface IThemeContext {
  theme: "lightTheme" | "darkTheme"; // тип фактической темы
  toggleTheme: () => void; // функция для переключения темы
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return context;
};
