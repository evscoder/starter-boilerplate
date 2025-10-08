<p align="right">
<a href="rules/en.md">General rules and Documentation</a> / <a href="rules/ru.md">Общие правила и документация</a>
</p>

<p style="text-align: center">
    <img width="200" height="auto" src="src/assets/img/Logo.svg" title="Starter Boilerplate" alt="Starter Boilerplate" align="center"> <h1 style="font-weight: bold; display: inline-block; vertical-align: middle;">Fe Starter Bricks</h1>
</p>

Модульный конструктор для фронтенд-разработки на основе Gulp 4 и Webpack 5, включающий инструменты:
- Шаблонизаторы Pug, Nunjucks, MJML, JSON.
- Плагин Emitty для инкрементальной сборки шаблонов.
- Препроцессор Scss, Tailwind CSS.
- Система сборки Gulp 4 и Webpack 5.
- Поддержка чистых ESM-пакетов или ES-модулей.
- Поддержка JavaScript с синтаксисом ES6 и Next либо TypeScript Next.
- Husky. Автоисправление Eslint при commit, обновление мажорной версии при push.
- Babel.
- Eslint.
- SVG-спрайты.
- PNG-спрайты и поддержка Retina-дисплеев.
- Пользовательские настройки.

#### Преимущества сборщика:

- Используется инкрементальная сборка шаблонов Pug. Здесь не применяется кэширование шаблонов, что значительно ускоряет процесс. По мере роста проекта скорость сборки сохраняется, так как пересобираются только изменённые компоненты.
- Возможность импортировать стили как в JavaScript, так и через scss @use.
- Возможность выбора между двумя шаблонизаторами: Pug и Nunjucks.
- Генерация спрайта из SVG-иконок: достаточно добавить иконку, и спрайт автоматически сгенерируется.
- Поддержка TypeScript.
- Сборщик легко поддерживать в актуальном состоянии, что упрощает дальнейшие миграции, а при помощи конфигурации webpack можно расширять сборку различными плагинами.
- Сборщик не зависим от глобального окружения, необходим только установленный Node.js.

####  <a href="LICENSE">The MIT License</a>

## Requirements
* Node >= 16.15.1 or latest version
* Gulp cli >= 2.3.0

## Guide
#### Install dependencies
```commandline
npm install
```

#### Initial husky
```commandline
npx husky init - option
```

#### Start local and hot-reloads
```commandline
npm start
```

#### Local server
[http://localhost:4200/](http://localhost:4200/)

#### Create build
```commandline
npm run build
```
