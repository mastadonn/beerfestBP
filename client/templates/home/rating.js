Template.rating.rendered = function () {
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
