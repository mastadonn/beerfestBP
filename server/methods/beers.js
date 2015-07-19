Meteor.methods({
  addBeer: function(name, description, beerimage) {
    Beers.insert({
      name: name,
      description: description,
      image: beerimage,
      createdAt: new Date()
    });
  },
  deleteBeer: function(id) {
    Beers.remove(id);
  }
});

Meteor.publish("beers", function(){
  return Beers.find();

});
