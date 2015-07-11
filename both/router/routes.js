Router.route('/', {
  name: 'home'
});

Router.route('/results', {
  name: 'results'
});

Router.route('/addbeer', {
  name: 'addbeer'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'addbeer']
});
