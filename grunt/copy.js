var config = require('./_config');

module.exports = {

    img: {
        expand: true,
        cwd: config.paths.img.src,
        src: ['*', '!svg-src'],
        dest: config.paths.img.dest,
    },

    svg: {
        expand: true,
        cwd: config.paths.css.src,
        src: 'svg/*',
        dest: config.paths.css.dest
    }
};
