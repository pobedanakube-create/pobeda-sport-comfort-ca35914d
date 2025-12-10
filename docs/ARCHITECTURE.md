# Архитектура проекта СК Победа

## Обзор

Проект построен на современном стеке React + Vite + TypeScript с использованием компонентного подхода и Tailwind CSS для стилизации.

## Архитектурные решения

### 1. Компонентная архитектура

Проект использует функциональные React-компоненты с хуками. Каждый компонент отвечает за отдельную секцию сайта.

```
┌─────────────────────────────────────────┐
│                 App.tsx                  │
│  (Providers: Query, Tooltip, Router)     │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│              Index.tsx                   │
│         (Главная страница)               │
└─────────────────────────────────────────┘
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
┌────────┐    ┌──────────┐    ┌──────────┐
│ Header │    │ Sections │    │  Footer  │
└────────┘    └──────────┘    └──────────┘
```

### 2. Секции главной страницы

| Компонент | Назначение |
|-----------|------------|
| `Header` | Навигация, логотип, CTA-кнопки |
| `HeroBanner` | Главный баннер с фоновым изображением |
| `AboutSection` | Информация о клубе |
| `ServicesSection` | Список услуг |
| `Gallery` | Фотогалерея клуба |
| `Testimonials` | Отзывы клиентов |
| `Benefits` | Преимущества клуба |
| `YClientsBooking` | Интеграция онлайн-записи YCLIENTS |
| `BookingForm` | Форма записи на тренировку |
| `Features` | Дополнительные возможности |
| `ContactSection` | Контакты и карта Mapbox |

### 3. UI-библиотека

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
└── ... (49 компонентов)
```

### 4. Стилизация

**Tailwind CSS** с кастомными переменными:

```css
/* Основные цвета */
--fitness-primary     # Основной цвет бренда
--fitness-secondary   # Вторичный цвет
--fitness-accent      # Акцентный цвет (оранжевый)
--fitness-overlay     # Оверлей для изображений
```

**Градиенты:**
- `bg-gradient-accent` — акцентный градиент для CTA-кнопок
- `shadow-glow` — свечение при hover-эффектах

### 5. Роутинг

Используется React Router DOM с простой структурой:

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 6. Интеграции

#### YCLIENTS
Интеграция через iframe для онлайн-записи:
```tsx
<iframe
  src="https://w123456.yclients.com/"
  title="Онлайн-запись YCLIENTS"
/>
```

#### Mapbox
Интерактивная карта с маркером клуба:
```tsx
mapboxgl.accessToken = token;
new mapboxgl.Map({
  center: [36.2572, 54.5293], // Калуга
  zoom: 14,
});
```

### 7. Версионность

Система версионирования в `src/lib/version.ts`:

```typescript
export const VERSION = "1.1.0";

export const VERSION_HISTORY = [
  { version: "1.1.0", date: "2025-01-25", changes: [...] },
  { version: "1.0.0", date: "2025-01-24", changes: [...] }
];
```

Версия отображается в footer сайта.

## State Management

- **React Query** — для серверного состояния и кеширования
- **useState/useRef** — для локального состояния компонентов
- Нет глобального store (Redux/Zustand) — не требуется для текущей сложности

## Производительность

### Оптимизации

1. **Lazy loading изображений** — компонент `LazyImage`
2. **Code splitting** — Vite автоматически разделяет бандлы
3. **CSS purging** — Tailwind удаляет неиспользуемые стили
4. **Performance Monitor** — отслеживание метрик в dev-режиме

### Рекомендуемые улучшения

- [ ] Добавить `React.lazy()` для секций below-the-fold
- [ ] Оптимизировать изображения (WebP, srcset)
- [ ] Добавить Service Worker для PWA

## Безопасность

- Внешние ссылки имеют `rel="noopener noreferrer"`
- Формы валидируются через Zod
- HTTPS для передачи данных форм
- Mapbox токен вводится пользователем (не хардкодится)

## Файловые соглашения

| Тип | Соглашение | Пример |
|-----|------------|--------|
| Компоненты | PascalCase | `HeroBanner.tsx` |
| Хуки | camelCase с use- | `use-mobile.tsx` |
| Утилиты | camelCase | `utils.ts` |
| Стили | kebab-case | `index.css` |




