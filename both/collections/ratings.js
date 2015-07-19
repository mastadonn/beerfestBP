Ratings = new Mongo.Collection('ratings');

Ratings.helpers({

});

RatingsSchema = new SimpleSchema({
  beer: {
    type: String,
    label: "Beer"
  },
  user: {
    type: String,
    label: "User"
  },
  tasteRating: {
    type: Number,
    label: "TasteRating",
    min: 1,
    max: 5
  },
  packagingRating: {
    type: Number,
    label: "PackingRating",
    min: 1,
    max: 5
  }
});
