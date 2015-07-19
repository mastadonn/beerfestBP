Template.beerList.helpers({
  beers: function() {
    return Beers.find({});
}
});
