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
#### Structure project
```commandline
src/                        # Root project folder
├── components/             # Interface components and pug configs
│   ├── layout/             # Common layouts (header, footer, containers)
│   ├── ui/                 # UI elements (buttons, forms, inputs, etc.)
│   ├── head/               # Blocks for <head> (meta tags, favicon, SEO)
│   ├── concat.json         # Config for script/style concatenation
│   ├── config.pug          # Main pug configuration
│   ├── mixins.pug          # Reusable pug mixins
│   └── scripts.pug         # Script includes for templates
│
├── js/                     # JavaScript logic
│   ├── modules/            # Core project modules (sliders, menus, etc.)
│   ├── fn/                 # Utility functions
│   ├── api/                # API integrations
│   ├── vendor/             # Third-party libraries
│   └── main.js             # Main JavaScript entry point
│
├── pages/                  # Project pages
│   ├── templates/          # Pug templates for specific pages
│   └── index.pug           # Main (home) page
│
├── styles/                 # Project styling
│   └── include/            # SCSS partials
│   └── plugins/            # SCSS plugins           
│
├── declare-styles.js       # Global style declarations/generator
├── styles.scss             # Main SCSS file
└── tailwind.css            # Tailwind CSS entry file
```

#### General development instructions.
The project consists of components located in the src folder.
New components should be created in this folder. To do this, create a new subfolder and add the necessary files in the following formats: json, pug, scss, js, depending on what is required.

A component is created inside the components folder with pug, scss, js files. Alongside these files, a data.json file can be added to store component data.

The assets/img/svg/ folder is intended for SVG icons. Icons in this folder are processed and compiled into a shared sprite file (symbols), which is generated and rebuilt automatically.
To insert an icon into a page, use the mixin `+icon('icon-name')`:

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

    @media (width < bq('sm-tablet')) {
        width: 75%;
    }

    @media (width < bq('sm')) {
        width: 100%;
    }

    &__element: {
        width: min(80%, 700px);

        @media (width < bq('sm-tablet') {
            width: 100%;
        }
    }
}
```
3) Only css variables are used, which are stored in the `variables` file. The colors are named in this order:
```commandline
--gray: #626263;
--gray2: #727273;
--gray3: #525253;
--gray4: #f8f8f8;
```
4. Write JavaScript using the latest features of EcmaScript - ES6, ES7 and newer for more understandable code (https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). Write modules in OOP using classes in JavaScript.
   Do global imports in the main.js file.
