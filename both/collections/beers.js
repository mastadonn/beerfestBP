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
    type: Object,
    label: "Image"
  }
});
