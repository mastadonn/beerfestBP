Meteor.subscribe("ratings");


Template.currentRatings.events({
  'click .currentRatings' : function() {
    var packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();
    tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();

    tasteTotal = 0;
    packagingTotal = 0;

    Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).map(function(doc) {
      tasteTotal += doc.tasteRating;
    });
    Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).map(function(doc) {
      packagingTotal += doc.packagingRating;
    });
    
    var tasteRatingAverage = tasteTotal / tasteRatingTotal ;
    packagingRatingAverage = packagingTotal / packagingRatingTotal ;
    tasteRatingDisplayAverage = tasteRatingAverage.toFixed(1);
    packagingRatingDisplayAverage = packagingRatingAverage.toFixed(1);


    console.log("taste "+ tasteRatingDisplayAverage, "packaging "+ packagingRatingDisplayAverage );

}
});

//{user: this.userId}
//   Ratings.find( { $and: [ { beer: "zCLDeWJkuGZESqZjM"}, {fields: {tasteRating: tasteRating } } ] }).fetch();

// Ratings.find({ beer: "zCLDeWJkuGZESqZjM",tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch();



// var test = Ratings.find({ beer: 'zCLDeWJkuGZESqZjM' ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch().sum('packagingRating');
