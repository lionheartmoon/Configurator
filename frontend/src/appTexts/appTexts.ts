export const appTexts = {
  components: {
    header: {
      title: "ЕСА Луч",
    },
    table: {
      asc: "По возрастанию",
      desc: "По убыванию",
    },
    modal: {
      okText: "ОК",
      cancelText: "Отмена",
      remove: "Удалить",
    },
  },
  signInPage: {
    title: "Авторизация",
    nameLabel: "Имя пользователя",
    password: "Пароль",
    submitBtn: "Войти",
  },
  gatewayIP: {
    title: "Подключение к шлюзу",
    ip: "IP",
    submitBtn: "Подключиться",
  },
  dashboard: {
    stats: {
      all: "Всего устройств",
      active: "Активных",
      unactive: "Неактивных",
      waiting: "Пакетов в очереди",
      server: "Сервер",
    },
  },
  devicesPage: {
    edit: {
      labels: {
        name: "Название",
        deviceId: "ID оборудования",
        ip: "IP",
        port: "Порт",
        tag: {
          name: "Название",
          invent: "Инвент. №",
          serial: "Серийн. №",
          address: "Адрес",
          register: "Тип регистра",
          type: "Тип данных",
          byteOrder: "Порядок байтов",
        },
      },
    },
    remove: "Удаление устройства",
  },
  notFoundPage: {
    title: "Страница не найдена",
    redirectLink: "Перейти на главную",
  },
  networkSettings: {
    labels: {
      name: "Сеть Wi-Fi",
      password: "Пароль",
      mode: "Режим",
      ip: "IP",
      mask: "Маска подсети",
      gateway: "Шлюз",
      mainDNS: "Основной DNS",
      alterDNS: "Альтернативный DNS",
    },
  },
  devicePage: {
    labels: {
      name: "Название",
      deviceId: "Номер устройства",
      ip: "IP",
      port: "Порт",
      protocol: "Протокол",
      running: "Статус",
    },
  },
  eventStatus: {
    INFO: "Инфо",
    WARNING: "Предупр.",
    ERROR: "Ошибка",
  },
  eventLimit: {
    ALL: "Все сообщения",
    THIRTY: "30 сообщений",
    FIFTY: "50 сообщений",
    HUNDRED: "100 сообщений",
  },
  serviceStatus: {
    ACTIVE: "Активно",
    RESTART: "Перезапуск",
    STOP: "Неактивно",
  },
  deviceType: {
    modbus_tcp: "MODBUS",
    focas: "FOCAS",
  },
};
