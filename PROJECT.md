---
name: shtab-ai
type: landing-page
status: active
owner: null
priority: high
stack: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, next-intl
version: 2.0.0
created: 2026-06-27T19:39:12+00:00
last_reviewed: 2026-06-29
---

# Shtab AI

Лендинг shtab-ai.ru — визитная карточка AI-лаборатории ДокторМ&Ai.

## Дизайн-система (v2.0)

- **Glassmorphism** — полупрозрачные карточки с backdrop-blur
- **Gradient palette** — violet → cyan → emerald
- **Space Grotesk** — display-шрифт
- **Blur-сферы** — плавающие фоновые элементы
- **Magnetic buttons** — gradient CTA с hover-glow

## Локализация

- `messages/ru.json` + `messages/en.json` — все тексты через next-intl

## Деплой

- Static export → rsync в `/var/www/shtab-ai.ru/`
- nginx раздаёт статику, SSL через Certbot
- Домен: shtab-ai.ru
