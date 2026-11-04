# NexaFlow / ECSU 2.0

**NexaFlow (ECSU 2.0)** — веб-приложение с интерфейсом на React, TypeScript и Vite, Python-функциями backend и SQL-миграциями PostgreSQL. В репозитории представлены страницы панели, интеграционные модули и документация по развёртыванию.

## Авторство и права

Автор и заявленный правообладатель проекта: **Николаев Владимир Владимирович**. Согласно предоставленной владельцем информации, проект создавался с использованием конструктора сайта **poehali.dev**; репозиторий содержит экспортируемый исходный код и дальнейшие изменения.

Сведения об авторстве, лицензии, границах сторонних компонентов и платформе создания собраны в [`AUTHORSHIP_AND_LICENSING.md`](open-source-program-creation-main/AUTHORSHIP_AND_LICENSING.md). До распространения проекта проверьте историю проекта и условия poehali.dev, а также лицензии зависимостей и сторонних материалов.

## Структура

- `open-source-program-creation-main/` — приложение и его исходники.
- `open-source-program-creation-main/src/` — клиентская часть.
- `open-source-program-creation-main/backend/` — Python-функции.
- `open-source-program-creation-main/db_migrations/` — SQL-миграции.
- `assets/` — ресурсы репозитория.

## Запуск frontend

Из каталога `open-source-program-creation-main/`:

```bash
npm install
npm run dev
```

Сборка и проверки:

```bash
npm run build
npm run lint
```

Backend и база данных требуют отдельной настройки; см. `open-source-program-creation-main/MIGRATION_EDITOR.md`.

## Лицензия

Для оригинальных материалов проекта заявлена проприетарная лицензия **All Rights Reserved**, если иное не указано для конкретного компонента. Сторонние библиотеки, шрифты, изображения и сервисы регулируются собственными лицензиями и условиями. Подробности и оговорки — в [`open-source-program-creation-main/AUTHORSHIP_AND_LICENSING.md`](open-source-program-creation-main/AUTHORSHIP_AND_LICENSING.md).
