# @ticketgo/core

Основной пакет проекта TicketGo.

Этот пакет предоставляет общую конфигурацию Prettier, используемую во всех пакетах TicketGo.

## Установка

```bash
npm install @ticketgo/core
```

## Использование

Импортируйте конфигурацию Prettier в ваш `prettier.config.mjs`:

```javascript
export { default } from "@ticketgo/core/prettier";
```

## Конфигурация

Пакет включает конфигурацию Prettier со следующими настройками:

- **Trailing Comma**: None
- **Tab Width**: 4
- **Use Tabs**: Да
- **Semi**: Нет
- **Single Quote**: Да
- **JSX Single Quote**: Да
- **Arrow Parens**: Avoid
- **Import Order**: Сторонние пакеты → Внутренние пакеты → Относительные импорты

## Лицензия

ISC

## Автор

Виталий Моржов ([@Vox1oot](https://github.com/Vox1oot))
