HomeController = AppController.extend({
  data: {
    Beers: Beers.find(),
    Ratings: Ratings.find()
  }
});
