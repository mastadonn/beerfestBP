Template.currentRatings.OnRendered = function () {
  // updateCurrentTasteRating();
  // updateCurrentPackagingRating();
};


Meteor.subscribe("ratings");
Meteor.subscribe("beers");







Template.currentRatings.helpers({
    tasteRatingTotal: function() {
      var tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();

    return tasteRatingTotal;
    },
    tasteRatingDisplayAverage: function() {
      var tasteTotal = 0,
      tasteRatingTotal = Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).count();

      if (tasteRatingTotal == this.tasteRatingTotal){return this.tasteRatingDisplayAverage;}
      else {


      Ratings.find({ beer: this._id ,tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).map(function(doc) {
        tasteTotal += doc.tasteRating;  });
      if (tasteRatingTotal === 0) { return tasteRatingTotal; }
      else {
        var tasteRatingAverage = tasteTotal / tasteRatingTotal ,
        tasteRatingDisplayAverage = tasteRatingAverage.toFixed(1);
        beerId = this._id;
      Meteor.call("updateBeerRatingTaste", beerId, tasteRatingTotal, tasteRatingDisplayAverage );
      // return tasteRatingDisplayAverage;
    }
      }
    },
    packagingRatingTotal: function() {
      var packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();
    return packagingRatingTotal;
    },
    packagingRatingDisplayAverage: function() {
      var packagingTotal = 0,
      packagingRatingTotal = Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).count();

      if (packagingRatingTotal == this.packagingRatingTotal){return this.packagingRatingDisplayAverage;}
      else {

      Ratings.find({ beer: this._id ,packagingRating: {$gt: 0} },{fields: {packagingRating: 1 }} ).map(function(doc) {
        packagingTotal += doc.packagingRating;  });

        if (packagingRatingTotal === 0) { return packagingRatingTotal; }
        else {
        var packagingRatingAverage = packagingTotal / packagingRatingTotal ,
        packagingRatingDisplayAverage = packagingRatingAverage.toFixed(1),
        beerId = this._id;

        var y = Number(packagingRatingDisplayAverage),
        x = Number(Beers.findOne({ _id: this._id }).tasteRatingDisplayAverage),
        z = x + y,
        totalRating = z /2;
        var beerRatingTotal = totalRating.toFixed(1);

        Meteor.call("updateBeerRatingPackaging", beerId, packagingRatingTotal, packagingRatingDisplayAverage );
        Meteor.call("updateBeerRatingTotal", beerId, beerRatingTotal );
        // console.log(beerRatingTotal);

        // return packagingRatingDisplayAverage;
      }

}
}
});
