Template.results.helpers({
  beers: function() {
    return Beers.find().fetch().reverse();
}
});
