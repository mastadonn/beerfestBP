Meteor.publishComposite("images", function() {
  return {
    find: function() {
      return Images.find({});
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
