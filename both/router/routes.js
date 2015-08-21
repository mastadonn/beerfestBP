Router.configure({
layoutTemplate: 'appLayout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading',
});




Router.map(function() {
      this.route('home', {
      path: '/',
      // template: 'home'
      loadingTemplate: 'loading',

  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('beers');
  },

  action: function () {
    this.render('home');
  }
});

      this.route('total', {
      path: '/total',
      template: 'total'
      });
      this.route('taste', {
      path: '/taste',
      template: 'taste'
      });
      this.route('packaging', {
      path: '/packaging',
      template: 'packaging'
      });
});


//Router.route('/results', {
//  name: 'results'
//});

Router.route('/addbeer', {
  name: 'addbeer'
});

Router.route('/admin', {
  name: 'admin',
});

Router.route('/loading', {
  name: 'loading',
  template: 'loading'
});

Router.plugin('ensureSignedIn', {
  only: ['addbeer']
});
