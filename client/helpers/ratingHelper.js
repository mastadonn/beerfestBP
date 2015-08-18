Template.registerHelper('tasteRatingTotal', function() {
  var tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();
return tasteRatingTotal;
});



Template.registerHelper('currentTasteRating', function() {
      var tasteTotal = 0,
      tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();

      Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).map(function(doc) {
        tasteTotal += doc.tasteRating;  });
      if (tasteRatingTotal === 0) { return tasteRatingTotal; }
      else {
        var tasteRatingAverage = tasteTotal / tasteRatingTotal ,
        tasteRatingDisplayAverage = tasteRatingAverage.toFixed(1);
      //   beerId = this._id;
      // Meteor.call("updateBeerRatingTaste", beerId, tasteRatingTotal, tasteRatingDisplayAverage );
      return tasteRatingDisplayAverage; }
});

Template.registerHelper('packagingRatingTotal', function() {
      var packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();
    return packagingRatingTotal;
});


Template.registerHelper('currentPackagingRating', function() {
      var packagingTotal = 0,
      packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();

      Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).map(function(doc) {
        packagingTotal += doc.packagingRating;  });

        if (packagingRatingTotal === 0) { return packagingRatingTotal; }
        else {
        var packagingRatingAverage = packagingTotal / packagingRatingTotal ,
        packagingRatingDisplayAverage = packagingRatingAverage.toFixed(1);
        return packagingRatingDisplayAverage; }

});
