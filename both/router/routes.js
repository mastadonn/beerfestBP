Router.route('/', {
  name: 'home'
});

Router.route('/results', {
  name: 'results'
});

Router.route('/addbeer', {
  name: 'addbeer'
});

Router.route('/admin', {
  name: 'admin',
});

Router.plugin('ensureSignedIn', {
  only: ['addbeer']
});
