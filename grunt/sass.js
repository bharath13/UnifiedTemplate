var config = require('./_config');

module.exports = {
    dev: {
        options: {
            sourceMap: true
        },
        files: [
            {src: config.paths.sass.main.sass, dest: config.paths.css.main},
            {src: config.paths.patternScaffolding.src, dest: config.paths.patternScaffolding.dest}
        ]
    },

    prod: {
        options: {
            outputStyle: 'compressed'
        },
        files: [
            {src: config.paths.sass.main.sass, dest: config.paths.css.min}
        ]
    }
};