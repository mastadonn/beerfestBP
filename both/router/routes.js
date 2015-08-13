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

      this.route('results', {
      path: '/results',
      template: 'results'
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
