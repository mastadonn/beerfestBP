Beers = new Mongo.Collection('beers');

Beers.helpers({

});

BeersSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  image: {
    type: String,
    label: "Image"
  },
  currentTasteRating: {
    type: Number,
    label: "currentTasteRating",
    min: 1,
    max: 5
  },
  tasteRatingTotal: {
    type: Number,
    label: "tasteRatingTotal",
    min: 1,
    max: 5
  },
  currentPackagingRating: {
    type: Number,
    label: "currentPackagingRating",
    min: 1,
    max: 5
  },
  packagingRatingTotal: {
    type: Number,
    label: "packagingRatingTotal",
    min: 1,
    max: 5
  }
});
