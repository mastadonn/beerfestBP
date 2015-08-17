Ratings = new Mongo.Collection('ratings');

Ratings.helpers({

});

Ratings.attachSchema = new SimpleSchema({
  beer: {
    type: String,
    label: "Beer"
  },
  userID: {
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
