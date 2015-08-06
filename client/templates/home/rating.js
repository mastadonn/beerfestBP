Template.rating.rendered = function () {
  this.$(".dropdown").dropdown();
  this.$('.rateit').rateit();
};


Template.rating.events({
  'click #rateitTaste' : function (event, template) {
    var beerId = this._id,
    userTaste = template.$('#rateitTaste').rateit('value'); // that's how you fetch the rating
    console.log(userTaste,beerId);
    Meteor.call("addratingtaste" ,userTaste ,beerId);
  }

});

Template.rating.events({
  'click #rateitPackaging' : function (event, template) {
    var beerId = this._id,
    userPackaging = template.$('#rateitPackaging').rateit('value'); // that's how you fetch the rating
    //    Session.set("selectedBeer", beerId);
     console.log(userPackaging, beerId);
     Meteor.call("addratingpackaging" , userPackaging ,beerId);
  }
 });


//  Template.rating.helpers({
//     'Ratings': function(){
//     var currentUserId = Meteor.userId();
//     console.log(Ratings.find({userId: currentUserId},{beer: this.id},{tasteRating: value} ));
//
// }
//   });
