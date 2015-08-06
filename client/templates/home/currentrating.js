Meteor.subscribe("ratings");

Template.currentRatings.helpers({
    tasteRatingTotal: function() {
      var tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();
    return tasteRatingTotal;
    },
    currentTasteRating: function() {
      var tasteTotal = 0,
      tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();

      Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).map(function(doc) {
        tasteTotal += doc.tasteRating;  });
      if (tasteRatingTotal === 0) { return tasteRatingTotal; }
      else {
        var tasteRatingAverage = tasteTotal / tasteRatingTotal ,
        tasteRatingDisplayAverage = tasteRatingAverage.toFixed(1);
      return tasteRatingDisplayAverage; }

    },
    packagingRatingTotal: function() {
      var packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();
    return packagingRatingTotal;
    },
    currentPackagingRating: function() {
      var packagingTotal = 0,
      packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();

      Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).map(function(doc) {
        packagingTotal += doc.packagingRating;  });

        if (packagingRatingTotal === 0) { return packagingRatingTotal; }
        else {
        var packagingRatingAverage = packagingTotal / packagingRatingTotal ,
        packagingRatingDisplayAverage = packagingRatingAverage.toFixed(1);
        return packagingRatingDisplayAverage; }
}
});

//{user: this.userId}
//   Ratings.find( { $and: [ { beer: "zCLDeWJkuGZESqZjM"}, {fields: {tasteRating: tasteRating } } ] }).fetch();

// Ratings.find({ beer: "zCLDeWJkuGZESqZjM",tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch();



// var test = Ratings.find({ beer: 'zCLDeWJkuGZESqZjM' ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch().sum('packagingRating');