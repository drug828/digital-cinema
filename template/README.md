# Digital Cinema — Frontend (Ticket Booking)

Учебный проект: фронтенд-часть системы бронирования билетов в кинотеатре.
Реализуется в рамках четырёхнедельной практики (frontend track).

## Tech stack

- **Angular 21** (standalone components, no NgModules)
- **TypeScript**
- **NgRx Signal Store** (`@ngrx/signals`) — управление состоянием
- **PrimeNG** — UI-компоненты
- **Angular CDK** — утилиты для UI-компонентов
- **TailwindCSS 4** + **SCSS** — стилизация

> Angular 21 выбран осознанно: на момент старта проекта Angular 22 (вышел ~20 дней назад)
> конфликтует по peer dependencies с NgRx. Будем переходить на 22, когда экосистема догонит.

## Project structure

```
src/app/
├── components/
│   ├── layout/         # обёртка страницы: навигация + <router-outlet>
│   ├── navigation/      # верхняя навигационная панель
│   └── pages/
│       ├── sessions/    # страница списка сеансов (route: '/')
│       └── session/     # страница одного сеанса (route: '/:id')
├── models/              # TypeScript-интерфейсы домена (Movie, Session, Seat, ...)
├── services/            # сервисы для работы с данными (HTTP / мок-данные)
├── stores/              # NgRx Signal Store — состояние приложения
├── mocks/               # статические мок-данные для разработки без backend
├── utils/               # вспомогательные функции
├── app.config.ts        # корневая конфигурация приложения (роутер, PrimeNG, HttpClient)
├── app.routes.ts        # описание маршрутов
└── app.ts / app.html     # корневой компонент
```

## Development

```bash
npm install
npm start        # alias for `ng serve`, открывается на http://localhost:4200/
```

```bash
npm run build     # production build → dist/
npm test          # unit-тесты (Vitest)
```

## Status

**Week 1 — Project Setup and Initial Structure.** ✅

- Сгенерирован и сконфигурирован Angular-проект
- Подключены и настроены NgRx Signal Store, PrimeNG, TailwindCSS, Angular CDK
- Создана базовая структура папок (`components`, `services`, `models`, `stores`, `utils`, `mocks`)
- Реализованы базовые компоненты `Layout` и `Navigation`
- Настроен роутинг между страницами `sessions` и `session`
- Приложение собирается и запускается без ошибок

Следующий шаг (Week 2): доменные модели, мок-данные, реальная страница списка сеансов.
