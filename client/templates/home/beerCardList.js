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

// Template.beerCardList.onRendered(function () {
//   $('.special.cards .image').dimmer({
//     on: 'hover'
//   });
//   });

//   Template.beerCardTile.events({
//     'click #beerImg': function (event) {
//       if (!Session.get("menuClosed","true")){}
//       else{
//       $('#beerImg').dimmer('show');
//   }
//   },
//     'click #voteClose': function (event,Template) {
//     $('#beerImg').dimmer('hide');
//     Session.set("menuClosed","true");
//   }
// });

  Template.tile.helpers({
    beers: function() {
      return Beers.find().fetch().reverse();
  }
  });


  Meteor.subscribe("beers");
