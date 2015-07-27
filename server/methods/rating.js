Meteor.methods({
  addratingpackaging: function(userPackaging ,beername){
    Ratings.insert({
        beer: beername,
        user: this.userId,
        packagingRating: userPackaging,
        createdAt: new Date()
    });
  },

  addratingtaste: function(userTaste ,beername ){
    Ratings.insert({
        beer: beername,
        user: this.userId,
        packagingRating: userTaste,
        createdAt: new Date()
    });
  },

});
