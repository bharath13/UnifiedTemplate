var config = require('./_config');

/**
 * All Browsersync options can be found here: https://www.browsersync.io/docs/options/
 */
module.exports = {
    dev: {
        bsFiles: {
            /**
             * Add any additional files to watch below in order to
             * trigger a reload
             */
            src: config.browserSyncWatchFiles
        },
        options: {
            watchTask: true,
            server: {
              baseDir: 'public'
            },
            port: 3000,
            startPath: "index.html"
            /**
             * Uncomment the below if you need to proxy to a local
             * server and delete server: true above.
             */
            // proxy: 'myserver.loc'
        }
    }
};
