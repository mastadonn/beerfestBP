Template.beerCardList.helpers({
  beers: function() {
    return Beers.find().fetch().reverse();
}
});

//Template.beerCardList.events({
//  'click .beercard': function() {
//    var beerId = this._id;
//    Session.set("selectedBeer", beerId);

//}
//});
