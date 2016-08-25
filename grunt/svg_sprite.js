var path = require('path'),
    config = require('./_config');

module.exports = {
    css_sprite: {
        expand: true,
        cwd: path.join(config.paths.img.src, 'svg-src/css-sprite'),
        src: ['**/*.svg'],
        dest: path.join(process.cwd(), 'source/assets/'),
        options: {
            mode: {
                css: {
                    bust: false,
                    render: {
                        scss: {
                            dest: path.join('../../../', config.paths.sass.root, 'base/_sprite.scss')
                        }
                    },
                    dimensions: true,
                    prefix: '%%'
                }
            }
        }
    },

    symbol: {
        expand: true,
        cwd: path.join(config.paths.img.src, 'svg-src/symbol'),
        src: ['**/*.svg'],
        dest: config.paths.img.dist,
        options: {
            mode: {
                symbol: {
                    sprite: '../symbols.svg',
                }
            }
        }
    }
};
