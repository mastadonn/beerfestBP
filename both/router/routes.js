Router.configure({
layoutTemplate: 'appLayout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading',
});




Router.map(function() {
      this.route('home', {
      path: '/',
      template: 'home'
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

Router.plugin('ensureSignedIn', {
  only: ['addbeer']
});
