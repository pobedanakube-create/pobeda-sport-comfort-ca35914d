export const VERSION = "1.1.0";

export const VERSION_HISTORY = [
  {
    version: "1.1.0",
    date: "2025-01-25",
    changes: [
      "Добавлена интеграция с YCLIENTS",
      "Оптимизирована адаптивность",
      "Улучшена производительность",
      "Добавлена система версионности"
    ]
  },
  {
    version: "1.0.0",
    date: "2025-01-24",
    changes: [
      "Первоначальный релиз сайта",
      "Основная структура и дизайн",
      "Базовая функциональность"
    ]
  }
];

export const updateVersion = (newVersion: string, changes: string[]) => {
  // В реальном проекте здесь можно добавить логику для автоматического обновления
  console.log(`Версия обновлена до ${newVersion}:`, changes);
};