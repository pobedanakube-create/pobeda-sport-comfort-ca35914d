# Архитектура проекта СК Победа

## Обзор

Проект построен на современном стеке React + Vite + TypeScript с использованием компонентного подхода и Tailwind CSS для стилизации.

**Текущая версия:** 1.3.1

## Архитектурные решения

### 1. Компонентная архитектура

Проект использует функциональные React-компоненты с хуками. Каждый компонент отвечает за отдельную секцию сайта.

```
┌─────────────────────────────────────────┐
│                 App.tsx                  │
│  (Providers: Query, Tooltip, Router)     │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│   Index.tsx   │       │  Privacy.tsx  │
│   (Главная)   │       │  Terms.tsx    │
└───────────────┘       └───────────────┘
        │
    ┌───┼───┐
    ▼   ▼   ▼
┌────┐┌────┐┌────┐
│Head││Sect││Foot│
│er  ││ions││er  │
└────┘└────┘└────┘
```

### 2. Секции главной страницы

| Компонент | Назначение |
|-----------|------------|
| `Header` | Навигация, логотип, CTA-кнопки |
| `HeroBanner` | Главный баннер с фоновым изображением |
| `AboutSection` | Информация о клубе |
| `ServicesSection` | Список услуг с ценами |
| `Gallery` | Фотогалерея клуба (WebP) |
| `Testimonials` | Реальные отзывы с Яндекс Карт |
| `Benefits` | Преимущества клуба |
| `BookingForm` | Форма записи с Telegram-уведомлениями |
| `Features` | Дополнительные возможности |
| `ContactSection` | Контакты и карта Яндекс |
| `CookieConsent` | Баннер согласия на обработку ПД |

### 3. Страницы приложения

| Страница | Путь | Назначение |
|----------|------|------------|
| `Index.tsx` | `/` | Главная страница |
| `Privacy.tsx` | `/privacy` | Политика конфиденциальности (fallback) |
| `Terms.tsx` | `/terms` | Пользовательское соглашение (fallback) |
| `NotFound.tsx` | `*` | 404 страница |

> **Примечание:** Основные юридические документы — PDF файлы в `/public/`. React-страницы служат fallback'ом.

### 4. UI-библиотека

Используется **shadcn/ui** — коллекция переиспользуемых компонентов на базе Radix UI:

```
src/components/ui/
├── accordion.tsx
├── button.tsx
├── card.tsx
├── dialog.tsx
├── form.tsx
├── input.tsx
├── select.tsx
├── toast.tsx
├── sonner.tsx
└── ... (49 компонентов)
```

### 5. Стилизация

**Tailwind CSS** с кастомными переменными:

```css
/* Основные цвета */
--fitness-primary     # Основной цвет бренда (синий)
--fitness-secondary   # Вторичный цвет (тёмно-синий)
--fitness-accent      # Акцентный цвет (оранжевый/красный)
--fitness-overlay     # Оверлей для изображений
```

**Градиенты:**
- `bg-gradient-accent` — акцентный градиент для CTA-кнопок
- `shadow-glow` — свечение при hover-эффектах

### 6. Роутинг

Используется React Router DOM:

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 7. Интеграции

#### Telegram Bot (заявки)
Форма записи отправляет данные в Telegram через Bot API:

```typescript
const sendToTelegram = async (data: FormData) => {
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: formatMessage(data),
      parse_mode: 'HTML'
    })
  });
};
```

#### Яндекс Карты
Встраивание через iframe с lazy loading:

```tsx
<iframe
  src="https://yandex.ru/map-widget/..."
  loading="lazy"
  title="Карта"
/>
```

### 8. Версионность

Система версионирования в `src/lib/version.ts`:

```typescript
export const VERSION = "1.3.1";

export const VERSION_HISTORY = [
  { version: "1.3.1", date: "2025-12-11", changes: [...] },
  { version: "1.3.0", date: "2025-12-10", changes: [...] },
  // ...
];
```

Версия отображается в footer сайта.

## State Management

- **React Query** — для серверного состояния и кеширования
- **useState/useRef** — для локального состояния компонентов
- Нет глобального store (Redux/Zustand) — не требуется для текущей сложности

## Производительность

### Реализованные оптимизации

1. **WebP изображения** — галерея и hero-баннер в формате WebP
2. **Lazy loading** — компонент `LazyImage`, iframe карты
3. **Асинхронная загрузка шрифтов** — Google Fonts с preload
4. **Code splitting** — Vite автоматически разделяет бандлы
5. **CSS purging** — Tailwind удаляет неиспользуемые стили
6. **Performance Monitor** — отслеживание метрик в dev-режиме

### Удалённые зависимости (оптимизация)
- Mapbox GL (~400 КБ) — заменён на iframe Яндекс Карт

## Безопасность и законодательство

### 152-ФЗ "О персональных данных"
- **CookieConsent** — баннер согласия на обработку ПД
- **Политика конфиденциальности** — PDF документ
- **Пользовательское соглашение** — PDF документ

### Технические меры
- Внешние ссылки имеют `rel="noopener noreferrer"`
- Формы валидируются через Zod
- HTTPS для передачи данных

## Файловые соглашения

| Тип | Соглашение | Пример |
|-----|------------|--------|
| Компоненты | PascalCase | `HeroBanner.tsx` |
| Страницы | PascalCase | `Privacy.tsx` |
| Хуки | camelCase с use- | `use-mobile.tsx` |
| Утилиты | camelCase | `utils.ts` |
| Стили | kebab-case | `index.css` |

## Деплой

### Production сборка
```bash
npm run build
```

### Содержимое dist/
```
dist/
├── assets/           # JS, CSS, изображения
├── index.html        # Входная точка
├── LOGO.png          # Favicon
├── Политика конфиденциальности.pdf
├── Пользовательское соглашение.pdf
└── robots.txt
```

### Хостинг
Проект деплоится через архив `dist.tar.gz` на VPS или статический хостинг.
