var path = require('path');
/**
 * Configuration values used by various grunt tasks
 */
module.exports = {
    paths: {
        assets: getSourceAssetPath(),

        get css() {
          var src = getSourceAssetPath('css'),
              dest = getPublicAssetPath('css'),
              dist = getSourceAssetPath('css');

          return {
            src: src,
            dest: dest,
            dist: dist,
            main: path.join(dest, 'main.css'),
            min: path.join(dist, 'main.min.css')
          }
        },

        img: {
          src: getSourceAssetPath('img'),
          dest: getPublicAssetPath('img'),
          dist: getSourceAssetPath('img')
        },

        js: {
          src: getSourceAssetPath('js'),
          dest: getPublicAssetPath('js'),
          dist: getSourceAssetPath('js')
        },

        sass: {
            root: getSourceAssetPath('sass'),
            main: {
                sass: getSourceAssetPath('sass/main.scss'),
                css: getSourceAssetPath('css/main.css'),
                cssmin: getSourceAssetPath('css/main.min.css')
            }
        }
    },
    /**
     * What browser versions should we support when generating the CSS files.
     * Valid string values can be found here: https://github.com/ai/browserslist
     */
    browserSupport: ['last 2 versions', 'ie 9-11'],
    /**
     * What files should we watch to refresh browser when changed?
     */
    browserSyncWatchFiles: [
      'public/**/*',
      '!public/styleguide/**/*'
    ]
};

/**
 * Return the path to our source assets directory
 * @returns {string}
 */
function getSourceAssetPath(assetPath) {
    assetPath = assetPath || '';
    return path.join('source/assets/', assetPath);
}

/**
 * Return the path to our public assets directory
 * @returns {string}
 */
function getPublicAssetPath(assetPath) {
    assetPath = assetPath || '';
    return path.join('public/assets/', assetPath);
}

