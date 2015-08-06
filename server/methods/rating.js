Meteor.methods({
  addratingpackaging: function(userPackaging ,beerId){
    Ratings.insert({
        beer: beerId,
        userId: this.userId,
        packagingRating: userPackaging,
        createdAt: new Date()
    });
  },

  addratingtaste: function(userTaste ,beerId ){
    Ratings.insert({
        beer: beerId,
        userId: this.userId,
        tasteRating: userTaste,
        createdAt: new Date()
    });
  },
//   tasteRatingUpdate: function(tasteRatingDisplayAverage ,tasteRatingTotal ,beerId ){
//   Beers.update(beerId,{
//       beer: this.beer,
//       tasteRating: tasteRatingDisplayAverage,
//       tasteVotes: tasteRatingTotal
//   });
// },
});
