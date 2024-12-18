# Тестовое задание frontend

Проект представляет собой простой поиск репозиториев в GitHub по логину пользователя. Посмотреть API можно тут: [GitHub GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer).

Сейчас в проекте существует проблема: он загружает только первые 10 репозиториев пользователя и не имеет механизма пагинации.

Ваша задача состоит в том, чтобы добавить сюда паттерн [Infinite Scrolling](https://www.interaction-design.org/literature/topics/infinite-scrolling?srsltid=AfmBOopRvkUaN8dsx-EMyKFex34OHJOelpMEL4TU2faoPpzv6h_6zkZ_).

## Условия задания

1. Реализуйте Infinite Scrolling и пагинацию в запросе на репозитории самостоятельно выбрав подход к решению проблемы
1. Вы можете добавить в приложение 1 пакет на свое усмотрение. Выбор (или не выбор) пакета также будет оценен
1. Вы можете реструктурировать существующий код на свое усмотрение.
1. Предположите, что паттерн будет использоваться в других местах проекта. Требуется реализация, которую можно переиспользовать
1. Приложите к заданию файл `CODE_REVIEW.md` с описанием любых других существующих в проекте проблем, которые вы бы исправили. В том числе, если они касаются гипотетического масштабирования. Если вам проще сразу исправить проблему кодом, чем описывать, сделайте это :)

## Используемые технологии

- [Next.js](https://nextjs.org) с использованием [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). В реальном проекте мы не используем Next.js, однако он здесь выбран для простоты как наиболее популярный вариант
- [Apollo](https://www.apollographql.com/docs/react/) &mdash; клиент GraphQL
- [shadcn/ui](https://ui.shadcn.com/) &mdash; библиотека компонентов. В реальном проекте не используется, выбрана для простоты, чтоб избежать лишних зависимостей
- [Tailwind CSS](https://tailwindcss.com/) &mdash; css фреймворк. В реальном проекте не используем сам Tailwind, однако частично используем utility-first подход, так что его полезно знать. Тут выбран для простоты, так как стили в задании второстепенны

## Запуск проекта

1. Создайте персональный токен доступа к API GitHub. [Инструкция](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)
1. Создайте файл с переменными окружения: `cp .env.example .env` и замените `<your_token>` на полученный ранее токен
1. Запустите команду `npm run codegen` для генерации gql типов
1. Запустите команду `npm run dev` и перейдите на [http://localhost:3030](http://localhost:3030)
