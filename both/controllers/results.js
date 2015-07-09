ResultsController = AppController.extend({
  data: {
    items: Items.find({})
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
