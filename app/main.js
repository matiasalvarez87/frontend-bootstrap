
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
