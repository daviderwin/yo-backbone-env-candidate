/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        handlebars:  '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone'
], function (Backbone, Templates) {
    Backbone.history.start();
});
