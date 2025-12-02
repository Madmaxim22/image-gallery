# Image Gallery

Простое веб-приложение для создания и управления галереей изображений. Позволяет добавлять изображения по URL с валидацией и удалять их из галереи.

![CI](https://github.com/Madmaxim22/image-gallery/actions/workflows/deploy.yml/badge.svg)

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://madmaxim22.github.io/image-gallery/)

## Функциональность

- **Добавление изображений**: Введите название и URL изображения для добавления в галерею
- **Валидация URL**: Автоматическая проверка корректности URL изображения
- **Удаление изображений**: Удаляйте изображения одним кликом
- **Интерактивный интерфейс**: Удобное управление с клавиатуры и мышью
- **Адаптивный дизайн**: Галерея корректно отображается на разных устройствах

## Технологии

- **JavaScript ES6+** с использованием классов и модулей
- **CSS3** с Flexbox для адаптивной верстки
- **Webpack 5** для сборки проекта
- **Jest** для модульного тестирования
- **ESLint** для проверки кода

## Установка и запуск

### Предварительные требования
- Node.js (версия 14 или выше)
- yarn(npm)

### Установка зависимостей
```bash
yarn(npm) install
```

### Запуск в режиме разработки
```bash
yarn(npm) start
```

### Сборка проекта
```bash
# Development сборка
yarn(npm) run build:dev

# Production сборка
yarn(npm) run build:prod
```

### Тестирование
```bash
# Запуск тестов
yarn(npm) test

# Запуск тестов в watch режиме
yarn(npm) run test:watch

# Запуск тестов с покрытием кода
yarn(npm) run test:coverage

# Проверка кода линтером
yarn(npm) run lint
```

![Tests](https://github.com/Madmaxim22/image-gallery/actions/workflows/deploy.yml/badge.svg)

## Структура проекта

```
image-gallery/
├── src/
│   ├── js/
│   │   ├──__tests__/
│   │   │  └── imageApp.test.js            # Тесты
│   │   ├── main.js                        # Точка входа приложения
│   │   ├── ImageApp.js                    # Основной класс приложения
│   │   └── GalleryManager.js              # Управление галереей изображений
│   ├── css/
│   │   └── style.css                       # Стили приложения
│   └── index.html                          # Основной HTML файл  
├── .gitignore
├── babel.config.json
├── eslint.config.js
├── jest.config.js
├── webpack.config.js
├── package.json
└── README.md
```

## Использование

1. Запустите приложение командой `yarn(npm) start`
2. Введите название изображения в первое поле
3. Введите корректный URL изображения во второе поле
4. Нажмите кнопку "Добавить" или клавишу Enter
5. Для удаления изображения нажмите на крестик в правом верхнем углу

## Особенности реализации

- **Модульная архитектура**: Код разделен на независимые классы
- **Обработка ошибок**: Валидация ввода и понятные сообщения об ошибках
- **Тестирование**: Полное покрытие unit-тестами с использованием Jest
- **Современный JavaScript**: Использование ES6+ синтаксиса и async/await
- **Оптимизация сборки**: Раздельные конфигурации для development и production

## Скрипты package.json

- `start` - запуск dev-сервера
- `build:dev` - сборка в development режиме
- `build:prod` - сборка в production режиме
- `test` - запуск тестов
- `test:watch` - запуск тестов в watch-режиме
- `test:coverage` - запуск тестов с измерением покрытия
- `lint` - проверка кода линтером

## Автор

Maksim Muhomedyarov

## Лицензия

ISC