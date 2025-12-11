# Инструкция по развёртыванию

## Требования

- **Node.js:** >= 18.0.0 (рекомендуется LTS)
- **npm:** >= 9.0.0 или **bun** >= 1.0.0
- **Git:** для клонирования репозитория

## Локальная разработка

### 1. Клонирование репозитория

```bash
git clone https://github.com/pobedanakube-create/pobeda-sport-comfort-ca35914d.git
cd pobeda-sport-comfort-ca35914d
```

### 2. Установка зависимостей

```bash
# npm
npm install

# или bun (быстрее)
bun install
```

### 3. Запуск dev-сервера

```bash
npm run dev
```

Сайт будет доступен по адресу: http://localhost:8080

### 4. Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера с HMR |
| `npm run build` | Сборка для production |
| `npm run build:dev` | Сборка в dev-режиме |
| `npm run preview` | Просмотр production-сборки |
| `npm run lint` | Проверка кода ESLint |

## Конфигурация

### Mapbox

Для отображения карты необходим Mapbox токен:

1. Зарегистрируйтесь на [mapbox.com](https://mapbox.com)
2. Создайте Access Token в настройках аккаунта
3. Введите токен в поле на сайте (секция «Контакты»)

> **Примечание:** Токен вводится на стороне клиента. Для production рекомендуется ограничить токен по домену.

### YCLIENTS

Для интеграции онлайн-записи:

1. Зарегистрируйтесь в [YCLIENTS](https://yclients.com)
2. Получите ссылку на виджет записи
3. Замените URL в `src/components/YClientsBooking.tsx`:

```tsx
<iframe
  src="https://ваш_id.yclients.com/"
  // ...
/>
```

## Production-сборка

### 1. Сборка проекта

```bash
npm run build
```

Файлы будут в папке `dist/`.

### 2. Структура dist/

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
├── index.html
├── favicon.ico
└── robots.txt
```

### 3. Деплой

#### Вариант A: Статический хостинг

Загрузите содержимое `dist/` на любой статический хостинг:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

#### Вариант B: Lovable

Проект изначально создан на [Lovable](https://lovable.dev):
1. Откройте проект в Lovable
2. Нажмите Share → Publish
3. Настройте кастомный домен (опционально)

#### Вариант C: VPS/сервер

```bash
# Установите nginx или другой веб-сервер
# Настройте конфиг для SPA:

server {
    listen 80;
    server_name pobeda-sport.ru;
    root /var/www/pobeda-sport/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Переменные окружения

Проект не требует обязательных переменных окружения. Опционально можно настроить:

```env
# .env.local (не коммитить!)
VITE_MAPBOX_TOKEN=pk.xxx...
VITE_YCLIENTS_ID=123456
```

И использовать в коде:
```tsx
const token = import.meta.env.VITE_MAPBOX_TOKEN;
```

## Обновление версии

При деплое новой версии:

1. Обновите `src/lib/version.ts`:
```typescript
export const VERSION = "1.2.0";

export const VERSION_HISTORY = [
  {
    version: "1.2.0",
    date: "2025-XX-XX",
    changes: ["Описание изменений"]
  },
  // ...предыдущие версии
];
```

2. Обновите `docs/CHANGELOG.md`

3. Создайте git tag:
```bash
git tag -a v1.2.0 -m "Версия 1.2.0"
git push origin v1.2.0
```

## Troubleshooting

### Ошибка: "Module not found"

```bash
# Удалите node_modules и переустановите
rm -rf node_modules package-lock.json
npm install
```

### Карта не отображается

- Проверьте валидность Mapbox токена
- Убедитесь, что токен не ограничен по домену (или добавьте localhost)

### YCLIENTS виджет не загружается

- Проверьте URL виджета
- Убедитесь, что YCLIENTS аккаунт активен
- Проверьте консоль браузера на ошибки CORS

## Контакты поддержки

При возникновении проблем с развёртыванием обращайтесь к владельцу репозитория.





