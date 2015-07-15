ResultsController = AppController.extend({
  data: {
    beers: Beers.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Results');
  }
});

ResultsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
