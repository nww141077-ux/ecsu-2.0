# NexaFlow / ECSU 2.0

Исходный код веб-приложения NexaFlow / ECSU 2.0. Проект создавался с использованием конструктора сайта **poehali.dev**; репозиторий хранит экспортированный код и последующие изменения.

## Запуск frontend

```bash
npm install
npm run dev
```

Команды `npm run build` и `npm run lint` выполняют production-сборку и проверку ESLint. Python-функции backend находятся в `backend/`, схема базы данных и миграции — в `db_migrations/`. Для backend нужны отдельные переменные окружения и PostgreSQL; инструкции находятся в [`MIGRATION_EDITOR.md`](MIGRATION_EDITOR.md).

## Авторство и лицензия

Автор и заявленный правообладатель: **Николаев Владимир Владимирович**. Для оригинальных материалов проекта указана проприетарная лицензия **All Rights Reserved**; это заявление не распространяется автоматически на сторонние зависимости и материалы. См. [`AUTHORSHIP_AND_LICENSING.md`](AUTHORSHIP_AND_LICENSING.md).
