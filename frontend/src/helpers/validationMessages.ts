interface IValidationMessages {
  [key: string]: string;
}

export const validationMessages: IValidationMessages = {
  required: "Обязательно для заполнения",
  min1: "Минимум 1 таймлайн",
  min2: "От 2 символов",
  min3: "От 3 символов",
  min4: "От 4 символов",
  min6: "От 6 символов",
  min10: "От 10 символов",
  max4: "До 4 символов",
  max10: "До 10 символов",
  max15: "До 15 символов",
  max20: "До 20 символов",
  max30: "До 30 символов",
  max40: "До 40 символов",
  max2000: "До 2000 символов",
  onlyNumber: "Только цифры",
  equalsSix: "6 цифр",
  equals11: "11 цифр",
  incorrectName: "Неверное имя пользователя",
  incorrectPassword: "Неверный пароль",
  phone: "11 цифр в формате 89...",
};
