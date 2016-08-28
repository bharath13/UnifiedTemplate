var path = require('path'),
    config = require('./_config');

module.exports = {
  sass: {
    files: path.join(config.paths.sass.root, '**/*.scss'),
    tasks: ['sass:dev', 'postcss:dev']
  },

  svg_symbol: {
    files: path.join(config.paths.img.src, 'svg-src/symbol/**/*.svg'),
    tasks: ['svg_sprite:symbol']
  },

  svg_css_sprite: {
    files: path.join(config.paths.img.src, 'svg-src/css-sprite/**/*.svg'),
    tasks: ['svg_sprite:css_sprite']
  },

  img: {
    files: [path.join(config.paths.img.src, '*'), '!' + path.join(config.paths.img.src, 'svg-src')],
    tasks: ['copy:img']
  },

  img: {
    files: [
      path.join(config.paths.img.src, '*'),
      '!' + path.join(config.paths.img.src, 'svg-src'),
      path.join(config.paths.css.src, 'svg/*')
    ],
    tasks: ['copy:img', 'copy:svg']
  },

  html: {
    files: ['source/_patterns/**/*.mustache', 'source/**/*.json'],
    tasks: ['shell:patternlab_watch', 'sass:dev', 'postcss:dev'],
    options: {
      spawn: true
    }
  }
};
