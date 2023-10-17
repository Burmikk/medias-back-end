# Medias-Api Backend

Цей проект є backend-частиною для створення касових чеків у магазині. Даний back end реалізує API для управління товарами, чеками та товарами у чеках.

Front-end частину можна переглянути за посиланням нижче,
**перший запуск може зайняти час, бо сервер засинає коли не використовується:**  

https://medias-front-end.vercel.app/

## Вимоги

Перед використанням цього back end впевніться, що ви маєте встановлені наступні пакети та програмне забезпечення:

-   Node.js (рекомендована версія: 14.x або вище)
-   npm (Node Package Manager) або yarn

## Налаштування

1. Склонуйте цей репозиторій на вашу локальну машину:

```bash
git clone https://github.com/your-username/medias-api.git
```

2. Встановіть необхідні залежності за допомогою команди

```bash
npm install
```

3. Створіть файл .env у корені проекту та додайте наступні налаштування для оточення:

```bash
PORT=3000
DB_HOST=mongodb://localhost:27017/mediasdb
```

Замість DB_HOST вкажіть URL до вашої бази даних MongoDB.

## Використання

Для запуску back end, виконайте наступну команду у корені проекту:

```bash
npm start
```

Ця команда запустить back end на порті, вказаному у файлі .env.

## API Документація

API документація створена за допомогою OpenAPI (Swagger). Ви можете переглянути та тестувати API за наступним посиланням: https://medias.onrender.com/api-docs

## Додаткова Інформація

Цей back end використовує Express.js для реалізації серверної частини та забезпечення API. Для збереження даних використовуються моделі MongoDB. Також використовуються додаткові бібліотеки, такі як morgan для логування та cors для керування політикою CORS.
