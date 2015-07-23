Template.beerCardList.helpers({
  beers: function() {
    return Beers.find().fetch().reverse();
}
});
