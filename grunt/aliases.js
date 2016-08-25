module.exports = {
  default: {
      description: 'Starts watching Sass/JS files for changes and opens site with BrowserSync watching to reload page.',
      tasks: [
        'shell:patternlab_generate',
        'sass:dev',
        'postcss:dev',
        'svg_sprite',
        'copy',
        'webpack:dev',
        'browserSync',
        'watch'
      ]
  },
  prod: ['webpack:prod', 'sass:prod', 'postcss:prod', 'svg_sprite']
};
