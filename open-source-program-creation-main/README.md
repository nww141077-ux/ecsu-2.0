# NexaFlow / ECSU 2.0

Веб-приложение с frontend на React, TypeScript и Vite, Python-функциями backend и SQL-миграциями PostgreSQL. В репозитории есть панели и модули для работы с инцидентами, отчётами, правовой информацией, безопасностью и финансами.

## Авторство и права

Автор и заявленный правообладатель оригинальных материалов: **Николаев Владимир Владимирович**. По информации владельца, проект создан с использованием конструктора сайта **poehali.dev**, затем экспортирован в этот репозиторий. Это заявление владельца, а не независимая проверка авторства или правового статуса.

Для оригинальных материалов, права на которые принадлежат автору, указано **All Rights Reserved**. Сторонние библиотеки, шрифты, изображения и иные материалы регулируются собственными лицензиями и условиями.

Подробности: [`AUTHORSHIP_AND_LICENSING.md`](AUTHORSHIP_AND_LICENSING.md), [`PROJECT_PROVENANCE.md`](PROJECT_PROVENANCE.md), [`THIRD_PARTY_LICENSES.md`](THIRD_PARTY_LICENSES.md).

## Запуск frontend

```powershell
npm install
npm run dev
```

Проверки:

```powershell
npm run build
npm run lint
```

Backend и база данных требуют отдельной настройки; см. [`MIGRATION_EDITOR.md`](MIGRATION_EDITOR.md).
