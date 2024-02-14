<p align="right">
    <a href="../README.md">Back to Readme</a>
</p>

Recommended global dependencies:
Node = next version download latest version https://nodejs.org/en.
Gulp cli >= 2.0.1 install latest version npm install --global gulp-cli.

Before starting work with the project, make sure that Node.js and Gulp cli are installed on your computer globally.
Before starting the project, you need to install packages and dependencies with the npm install command. To do this, go to the project folder and launch the command console.
Starting a project for development is done with the npm run start command.
The project is built using the npm run build command.

All necessary commands for working with the project, as well as dependencies, can be viewed in package.json.

#### General development instructions.
The project consists of components that are located in the src folder. New components should be developed in this folder. To do this, you need to create a new folder and in it create the necessary files in the following formats: json, pug, scss, js, depending on what files are required.
The component is created in the components folder with pug, scss, js files. Along with the component files, you can create a data.json file to store the data. scss files in components are concatenated with the main.scss file automatically. The js files are compiled by webpack.
In the assets/img/icons/ folder it is intended for icons in svg format. Here the icons are processed and collected into a common sprite file svg-symbols, which is generated and reassembled. To insert an icon onto a page, you need to use the `+icon('icon-name')` mixin.

1. Development is carried out according to the BEM methodology (information on BEM https://ru.bem.info/methodology/).
2. Use the advantages of the Pug template engine - mixins, conditions, iterators, work with data in the data.json format in the component folder. Separate logic and data (https://pugjs.org/language/mixins.html).
   The component is created by a mixin with the `data` parameter
```commandline
mixin Header(data = {})
    header.page-header
        a.page-header__account(href='#')
            if data.account
                img(src='__static__img/content/avatar.png', alt='#')
            else
                +icon('icon-avatar')
```
Components are called on pages in the `pages` folder. Global components are added to template.pug, or you can create a new global template for building pages, or add logic to the main template. The `data` parameter is an object that is passed when the mixin is called. The mixin is then called on the page `Header({ account: true })`.

3. Take advantage of the scss preprocessor - nesting, mixins, plugins, functions (https://sass-lang.com/documentation/).
   Don't use preprocessor variables, instead use native variables that are added to the variables.scss file.
   Nesting should be as in the example, observing BEM and scss syntax:
```commandline
block {
    &--modifier {
        background-color: var(--gray-color);
    }

    &__element: {
        width: min(80%, 700px);

        .block--modifier & {
            color: var(--primary-color);
        }
    }
}
```
Media queries are written nested for each block
```commandline
block {
    width: 50%;

    @media screen and (max-width: 767px) {
        width: 75%;
    }

    @media screen and (max-width: 568px) {
        width: 100%;
    }

    &__element: {
        width: min(80%, 700px);

        @media screen and (max-width: 767px) {
            width: 100%;
        }
    }
}
```
3) Only css variables are used, which are stored in the `variables` file. The colors are named in this order:
```commandline
--gray-color: #626263;
--gray-color-2: #727273;
--gray-color-3: #525253;
--gray-color-4: #f8f8f8;
```
4. Write JavaScript using the latest features of EcmaScript - ES6, ES7 and newer for more understandable code (https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). Write modules in OOP using classes in JavaScript.
   Do global imports in the main.js file.
