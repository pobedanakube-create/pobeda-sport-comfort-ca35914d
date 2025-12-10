# СК Победа — Официальный сайт спортивного клуба

## Общая информация

**Проект:** Сайт-визитка спортивного клуба «Победа»  
**Версия:** 1.1.0  
**Дата создания:** Январь 2025  
**Статус:** В разработке / Production  

## Цель проекта

Создание современного, адаптивного веб-сайта для спортивного клуба «СК Победа» в г. Калуга с целью:
- Привлечения новых клиентов
- Онлайн-записи на тренировки через YCLIENTS
- Информирования о услугах и ценах
- Отображения контактной информации и местоположения

## Бизнес-информация

| Параметр | Значение |
|----------|----------|
| Название | СК Победа |
| Адрес | г. Калуга, ул. Кибальчича, д.32 |
| Телефон | +7 910 529 82 82 |
| Email | pobedanakube@gmail.com |
| Режим работы | Пн-Вс: 06:00 — 23:00 |
| VK | https://vk.com/pobeda_sport |
| Telegram | https://t.me/pobeda_sport |
| Instagram | https://instagram.com/pobeda_sport |

## Основные функции

1. **Главный баннер (Hero)** — привлекающий внимание блок с CTA-кнопками
2. **О клубе** — описание преимуществ и особенностей
3. **Услуги** — список предоставляемых услуг
4. **Галерея** — фотографии клуба и оборудования
5. **Отзывы** — отзывы клиентов
6. **Онлайн-запись** — интеграция с YCLIENTS
7. **Форма записи** — альтернативная форма обратной связи
8. **Контакты** — карта (Mapbox), контактные данные

## Технологический стек

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui (Radix UI)
- **State Management:** React Query (TanStack)
- **Routing:** React Router DOM 6.30
- **Maps:** Mapbox GL
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## Структура проекта

```
src/
├── assets/          # Статические ресурсы (изображения)
├── components/      # React компоненты
│   ├── ui/          # shadcn/ui компоненты
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Benefits.tsx
│   ├── YClientsBooking.tsx
│   ├── BookingForm.tsx
│   ├── Features.tsx
│   └── ContactSection.tsx
├── hooks/           # Кастомные хуки
├── lib/             # Утилиты и версионность
├── pages/           # Страницы приложения
│   ├── Index.tsx    # Главная страница
│   └── NotFound.tsx # 404 страница
├── App.tsx          # Корневой компонент
├── main.tsx         # Точка входа
└── index.css        # Глобальные стили
```

## Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/pobedanakube-create/pobeda-sport-comfort-ca35914d.git

# Переход в директорию
cd pobeda-sport-comfort-ca35914d

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build
```

## Документация

- [Архитектура проекта](./ARCHITECTURE.md)
- [Инструкция по развёртыванию](./SETUP.md)
- [Журнал изменений](./CHANGELOG.md)

## Контакты разработки

При возникновении вопросов по разработке обращайтесь к владельцу репозитория.

---

© 2025 СК Победа. Все права защищены.




