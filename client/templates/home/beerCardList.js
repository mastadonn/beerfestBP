Template.beerCardList.helpers({
  beers: function() {
    return Beers.find().fetch().reverse();
}
});


Meteor.subscribe("beers");

Template.beerCardList.onCreated(function () {
    var beerCount = Beers.find({}).count();
    Session.set("beerCount", beerCount);
  });

Template.beerCardList.helpers({
    getBeerCount: function () {
      var newValue = Beers.find().count(),
      beerCount = Session.get("beerCount");
      if (beerCount !== newValue){
      Session.set("beerCount", newValue);
      Feedback.provide("addbeer");
      return Session.get("beerCount");
    }
  }
  });
