Router.configure({
layoutTemplate: 'appLayout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading',
});




Router.map(function() {
      this.route('beer.show', {
      path: '/beers/:slug',
      template: 'beer',
      waitOn: function() {
      return Meteor.subscribe('single-beer', this.params.slug);
      },
      data: function() {
      return Beers.findOne({slug: this.params.slug});
      }
      });

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
