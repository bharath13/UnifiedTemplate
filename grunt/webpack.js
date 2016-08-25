var path = require('path'),
    webpack = require('webpack'),
    config = require('./_config'),
    _ = require('lodash');

var output = {
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js'
};

/**
 * Configuration for Webpack. See all available options here: https://webpack.github.io/docs/configuration.html
 */
module.exports = {
    // shared options between targets
    options: {
        context: path.join(config.paths.js.src, 'src'),
        entry: {
            main: './main.js',
            vendor: ['jquery', 'svg4everybody', 'slick', 'waypoints', 'waypointsSticky']
        },
        resolve : {
          alias: {
              jquery: path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
              slick: path.join(__dirname, '../node_modules/slick-carousel/slick/slick.min.js'),
              waypoints: path.join(__dirname, '../node_modules/waypoints/lib/jquery.waypoints.js'),
              waypointsSticky: path.join(__dirname, '../node_modules/waypoints/lib/shortcuts/sticky.js'),
              history: path.join(__dirname, '../node_modules/historyjs/scripts/bundled/html5/native.history.js')
          }
        },
        plugins: [
          new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
          })
        ]
    },

    dev: {
      watch: true,
      debug: true,
      devtool: '#source-map',
      output: _.assign({}, output, {
        path: path.join(config.paths.js.dest, 'built')
      })
    },

    prod: {
        output: _.assign({}, output, {
          path: path.join(config.paths.js.dist, 'dist')
        }),
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    drop_console: true
                }
            })
        ]
    }
};
