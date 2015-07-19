Meteor.startup(function() {

  Factory.define('ratings', Ratings, {
    beer: function() {
      return Fake.sentence();
    },
    user: function() {
      return Fake.sentence();
    },
    tasteRating: function() {
      return _.random(1, 5);
    },
    packagingRating: function() {
      return _.random(1, 5);
    }
  });

  if (Ratings.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('ratings');
    });

  }

});
