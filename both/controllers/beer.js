BeerController = AppController.extend({
  data: {
    Beers: Beers.find()
  }
});


BeerShowController = RouteController.extend({
  template: 'beer',
  subscriptions: function(){
    return Meteor.subscribe('beer', this.params._id);
  }
});
