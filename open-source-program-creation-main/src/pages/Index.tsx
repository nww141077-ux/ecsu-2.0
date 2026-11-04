import { useNavigate } from "react-router-dom";

const stats = [
  { value: "24/7", label: "Мониторинг" },
  { value: "12+", label: "Модулей" },
  { value: "99.9%", label: "Доступность" },
  { value: "ECSU", label: "Платформа" },
];

const features = [
  {
    icon: "🛡️",
    title: "Безопасность",
    text: "Управление угрозами, блокировками, инцидентами и защитой данных в одном интерфейсе.",
  },
  {
    icon: "💰",
    title: "Финансы",
    text: "Контроль счетов, аналитика, выплаты, правила распределения средств и статус операций.",
  },
  {
    icon: "📊",
    title: "Аналитика",
    text: "Сводки, интеллект-аналитика, визуализация данных и отчеты по событиям.",
  },
  {
    icon: "⚙️",
    title: "Автоматизация",
    text: "Сценарии, работа с действиями, интеграции и централизованное управление платформой.",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="site-shell mesh-bg">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">E</div>
          <div>
            <div className="brand-name">ECSU 2.0</div>
            <div className="brand-sub">Unified Platform</div>
          </div>
        </div>

        <nav className="topnav" aria-label="Главная навигация">
          <button onClick={() => navigate("/egsu/start")}>Система</button>
          <button onClick={() => navigate("/egsu/dashboard")}>Кабинет</button>
          <button onClick={() => navigate("/admin")}>Админ</button>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Единая централизованная система управления</span>
          <h1>
            Контроль <span>безопасности</span>, данных и операций в одном месте.
          </h1>
          <p>
            ECSU 2.0 объединяет мониторинг инцидентов, финансовую аналитику, защиту
            инфраструктуры, автоматизацию процессов и управление доступом для владельца,
            команды и пользователей.
          </p>

          <div className="cta-row">
            <button className="btn-primary" onClick={() => navigate("/egsu/start")}>
              Перейти в систему
            </button>
            <button className="btn-secondary" onClick={() => navigate("/egsu/dashboard")}>
              Смотреть дашборд
            </button>
          </div>

          <div className="trust-row">
            <span>Реальное управление</span>
            <span>Безопасность</span>
            <span>Масштабируемость</span>
          </div>
        </div>

        <div className="hero-panel glass-panel">
          <div className="status-row">
            <div className="status-dot" />
            <span>System online</span>
          </div>

          <div className="mini-block">
            <div className="mini-label">Уровень защиты</div>
            <div className="mini-value positive">99.9%</div>
          </div>

          <div className="monitor-list">
            <div className="monitor-item">
              <span>Инциденты</span>
              <strong>1,247</strong>
            </div>
            <div className="monitor-item">
              <span>Решено</span>
              <strong>893</strong>
            </div>
            <div className="monitor-item">
              <span>Активных</span>
              <strong>241</strong>
            </div>
          </div>

          <div className="signal-bars" aria-label="Состояние системы">
            <span style={{ height: "38%" }} />
            <span style={{ height: "52%" }} />
            <span style={{ height: "68%" }} />
            <span style={{ height: "78%" }} />
            <span style={{ height: "100%" }} />
          </div>
        </div>
      </main>

      <section className="stats-grid" aria-label="Основные показатели">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card glass-panel">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="eyebrow">Что умеет система</span>
          <h2>Готовый инструментарий для управления цифровым объектом</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card glass-panel">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner glass-panel">
        <div>
          <span className="eyebrow">Готовы начать?</span>
          <h3>Подключите систему и управляйте цифровыми процессами в одном окне.</h3>
        </div>
        <button className="btn-primary" onClick={() => navigate("/egsu/start")}>
          Открыть ECSU 2.0
        </button>
      </section>
    </div>
  );
}

