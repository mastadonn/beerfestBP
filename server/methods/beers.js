Meteor.methods({
  addBeer: function(name, description) {
    Beers.insert({
      name: name,
      description: description,
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