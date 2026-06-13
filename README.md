# EGSU 2.0 — Система управления образовательным процессом

**EGSU** (Educational Global System Unified) 2.0 — модульная система для автоматизации учебного процесса в вузах.

## Описание проекта

EGSU 2.0 включает:
* **Frontend** — веб‑интерфейс для студентов и преподавателей;
* **Backend** — API‑сервер на Python (Django/Flask);
* **База данных** — PostgreSQL с миграциями.

## Структура проекта

\`
ecsu-2.0/
├── backend/          # Серверная часть
├── frontend/         # Клиентская часть
├── db_migrations/    # Миграции базы данных
├── public/           # Статические файлы
└── README.md        # Этот файл
\`

## Установка и запуск

### Frontend
1. Перейдите в папку frontend/.
2. Установите зависимости: npm install.
3. Запустите сервер разработки: npm run dev.

### Backend
1. Перейдите в папку backend/.
2. Создайте виртуальное окружение: python -m venv venv.
3. Активируйте его: venv\Scripts\activate (Windows).
4. Установите зависимости: pip install -r requirements.txt.
5. Примените миграции: python manage.py migrate.
6. Запустите сервер: python manage.py runserver.

## Вклад в проект

Мы приветствуем вклад в развитие EGSU 2.0. Для этого:
1. Создайте ветку: git checkout -b feature/your-feature.
2. Внесите изменения.
3. Отправьте ветку на GitHub: git push origin feature/your-feature.
4. Создайте Pull Request на GitHub.

## Лицензия

Проект распространяется под лицензией MIT. Подробнее — в файле LICENSE.
