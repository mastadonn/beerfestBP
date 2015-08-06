ResultsController = AppController.extend({
  data: {
    beers: Beers.find({}),
    Ratings: Ratings.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Results');
  }
});
