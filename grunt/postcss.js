var config = require('./_config'),
    path = require('path');

module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({
                browsers: config.browserSupport
            })
        ]
    },
    dev: {
        src: config.paths.css.main
    },
    prod: {
        options: {
            map: false
        },
        src: config.paths.css.min
    }
};
