Meteor.publishComposite("beers", function() {
  return {
    find: function() {
      return Beers.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});


Meteor.publish('single-beer', function(slug){
  check(slug, String);
  var data = Beers.find({"slug": slug});
  if (data) {
    return data;
  }
  this.ready();
});
