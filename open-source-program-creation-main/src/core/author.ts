/**
 * Авторские метаданные NexaFlow / ECSU 2.0.
 * Автор и заявленный правообладатель оригинальных материалов: Николаев Владимир Владимирович.
 * По информации владельца, проект создавался с использованием конструктора poehali.dev.
 * Авторское заявление и оговорки о сторонних компонентах: AUTHORSHIP_AND_LICENSING.md.
 * © 2026 Николаев Владимир Владимирович. All Rights Reserved для оригинальных материалов автора.
 */

export const CORE_AUTHOR = {
  fullName: "Николаев Владимир Владимирович",
  birthDate: "14.10.1977",
  createdAt: "2026",
  license: "All Rights Reserved (original author-owned materials)",
  copyright: "© 2026 Николаев Владимир Владимирович. All Rights Reserved для оригинальных материалов автора.",
  version: "2.0.0",
} as const;

export const CORE_META = {
  appName: "NexaFlow / ECSU 2.0",
  appNameRu: "NexaFlow / ЕЦСУ 2.0",
  fullName: "Единая Центральная Система Управления",
  fullNameEn: "Unified Central Management System",
  description: "Система мониторинга, правового анализа и управления инцидентами",
  author: CORE_AUTHOR.fullName,
  email: "nikolaevvladimir77@yandex.ru",
  rights: "Авторское заявление относится только к оригинальным материалам, права на которые принадлежат автору; сторонние компоненты регулируются собственными лицензиями.",
  creationPlatform: "poehali.dev (по информации владельца проекта)",
} as const;

/** Версия архитектуры ядра. */
export const CORE_ARCH = {
  kernel: "ECSU-CORE-2",
  aiAdmin: "ecsu-ai",
  scanner: "incident-scanner",
  modules: ["ecsu-incidents", "security", "finance", "ecsu-voice", "legal-base"],
  dataProtection: "AES-256 + HTTPS",
  selfPreservation: true,
} as const;

/** Проверяет наличие обязательных метаданных ядра. */
export function verifyCoreIntegrity(): { ok: boolean; version: string; author: string } {
  const required = [CORE_AUTHOR.fullName, CORE_META.appName, CORE_ARCH.kernel];
  const ok = required.every(Boolean);
  return { ok, version: CORE_AUTHOR.version, author: CORE_AUTHOR.fullName };
}

/** Формирует метку системного события для логирования. */
export function coreEvent(type: string, data?: Record<string, unknown>): Record<string, unknown> {
  return {
    system: CORE_META.appName,
    kernel: CORE_ARCH.kernel,
    event: type,
    author: CORE_AUTHOR.fullName,
    ts: new Date().toISOString(),
    ...data,
  };
}

export default CORE_AUTHOR;
