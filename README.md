<p align="right">
<a href="rules/en.md">General rules and Documentation</a> / <a href="rules/ru.md">Общие правила и документация</a>
</p>

<img width="200" height="auto" src="src/assets/img/content/Logo.svg" title="Starter Boilerplate" alt="Starter Boilerplate" align="center">

Модульный конструктор для фронтенд-разработки на основе Gulp 4 и Webpack 5, включающий инструменты:
- Шаблонизаторы Pug, Nunjucks, MJML, JSON.
- Плагин Emitty для инкрементальной сборки шаблонов.
- Препроцессор Scss.
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
- Используется инкрементальная сборка шаблонов Pug. Здесь не используется кэширование шаблонов, что значительно ускоряет сборку. С разрастанием проекта скорость сборки сохраняется, это достигается за счет того, что сборка шаблонов затрагивается только из тех компонентов, которые меняются.
- Возможность импортировать стили как в js, так и использовать scss use.
- Возможность использовать на выбор два шаблонизатора Pug или Nunjucks.
- Генерация спрайта из svg иконок, достаточно перенести иконку и спрайт с генерируется.
- Возможность использования TypeScript.
- Сборщик легко поддерживать в актульном состоянии, что позволяет делать миграции в дальнейшем.

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
npx husky init
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
