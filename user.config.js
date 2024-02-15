const env = {
    'PROJECT_VERSION': null, // "1.0"
    'BACKUP': true,
    'EMAILS_BUILD': true,
    'FOLDER_BUILD': 'build',
    'SERVER_INDEX_PAGE': 'index.html',
    'OPTIMIZE_IMAGES': true,
    'PNG_OPTIMIZE': true,
    'PNG_SPRITE': false,
    typeScript: false,
    sourcemaps: true,
    sourceFolder: 'src',
    developer: 'dev',
    assets: 'dev/assets',
    imageFolderName: 'img',
    styleFileName: 'main',
    templatePreproc: 'pug', // Values 'pug' or 'nunjucks'
    templateLocals: {
        version: '',
        symbolsInject: false,
        pathPrefix: '__static__'
    },
    styles: {
        pathPrefix: '__static__'
    },
    cssMinify: true,
    cssPrettify: {
        indent: '    ',
        openbrace: 'end-of-line',
        autosemicolon: true
    },
    htmlMinify: false,
    prettify: {
        'indent_char': ' ',
        'indent_size': 4,
        'indent_level': 1,
        'preserve_newlines': true,
        'max_preserve_newlines': 1
    },
};

export default env;
