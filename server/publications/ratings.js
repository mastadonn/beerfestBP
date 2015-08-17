Meteor.publishComposite("ratings", function() {
  return {
    find: function() {
      return Ratings.find({userId: Meteor.userID});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  };
});
