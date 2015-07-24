Meteor.publishComposite("ratings", function() {
  return {
    find: function() {
      return Ratings.find({});
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
