/**
 * app.js
 **/

define([], function () {

    'use strict';

    var app = {

        version: 4321,

        init: function() {
            alert('Application version: ' + this.version);
        }
    };

    return app;
});
