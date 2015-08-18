Meteor.methods({
  addBeer: function(name, description, beerimage) {

    Beers.insert({
      name: name,
      description: description,
      image: beerimage,
      createdAt: new Date()
    });
  },
  deleteBeer: function(id) {
    Beers.remove(id);
  },

  updateBeerRatingTaste: function(beerId, tasteRatingTotal, tasteRatingDisplayAverage){
        Beers.update(
          {_id: beerId},
          {$set: {
            tasteRatingTotal:tasteRatingTotal,
            tasteRatingDisplayAverage: tasteRatingDisplayAverage
          }},
          { upsert: true }
        );
      },

      updateBeerRatingPackaging: function(beerId, packagingRatingTotal, packagingRatingDisplayAverage){
            Beers.update(
              {_id: beerId},
              {$set: {
                packagingRatingTotal:packagingRatingTotal,
                packagingRatingDisplayAverage: packagingRatingDisplayAverage
              }},
              { upsert: true }
            );
              }



});


    // var beerRatings = {
    // tasteRatingTotal:             tasteRatingTotal,
    // tasteRatingDisplayAverage:    tasteRatingDisplayAverage,
    // packagingRatingTotal:         packagingRatingTotal,
    // packagingRatingAverage:       packagingRatingAverage,
    // };
