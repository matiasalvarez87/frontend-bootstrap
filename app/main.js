
/* global escape: true */

require.config({
    paths: {
        'jquery': 'jquery/jquery',
        'underscore': 'underscore/underscore'
    },
    shim: {
        'jquery': { 'exports': '$' },
        'underscore': { 'exports': '_' }
    }
});

(function () {
    require(['js/app'], function (app) {
        app.init();
    });
})();