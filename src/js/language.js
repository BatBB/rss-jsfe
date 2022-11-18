const language = {
  levels: {
    en: [
      "Warming-up",
      "Passerines",
      "Forest birds",
      "Songbirds",
      "Predator birds",
      "Sea birds",
    ],
    ru: [
      "Разминка",
      "Воробьиные",
      "Лесные птицы",
      "Певчие птицы",
      "Хищные птицы",
      "Морские птицы",
    ],
  },
  description: {
    en: "Listen to the player.\nChoose an answer from the list.",
    ru: "Послушайте плеер.\nВыберите ответ из списка.",
  },
  nav: {
    en: ["Home", "Quiz", "Result", "Gallery"],
    ru: ["Начальная страница", "Викторина", "Результат", "Галерея"],
  },
  score: {
    en: "Score:",
    ru: "Набрано баллов:",
  },
  congratulation: {
    en: "Сongratulations!",
    ru: "Поздравляем!",
  },
  resultText: {
    en: `You scored ${localStorage.getItem("score")} points out of 30`,
    ru: `Вы набрали ${localStorage.getItem("score")} баллов из 30`,
  },
  resultBtn: {
    en: "Play again",
    ru: "Сыграть еще раз",
  },
};

export default language;
