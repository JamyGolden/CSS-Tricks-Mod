require([
    'app',
    'router'
],

function(app, Router, PodViewNav) {

    app.router = new Router();

    app.router.on('route:index', function(actions) {
        var podNavView = new PodViewNav();
    });

    Backbone.history.start({ root: app.root });

});
