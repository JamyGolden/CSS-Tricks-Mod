require([
    'app'
],

function(app) {




    Backbone.history.start({ root: app.root });

});
