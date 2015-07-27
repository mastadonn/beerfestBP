Template.rating.rendered = function () {
  this.$('.rateit').rateit();
};

Template.rating.events({
  'click #rateitTaste' : function (event, template) {
    var beername = this._id;
//    Session.set("selectedBeer", beerId);
    var userTaste = template.$('#rateitTaste').rateit('value'); // that's how you fetch the rating
    console.log(userTaste,beername);
    Meteor.call("addratingtaste" ,userTaste ,beername);
  }

});

Template.rating.events({
  'click #rateitPackaging' : function (event, template) {
    var beername = this._id;
//    Session.set("selectedBeer", beerId);
    var userPackaging = template.$('#rateitPackaging').rateit('value'); // that's how you fetch the rating
     console.log(userPackaging, beername);
     Meteor.call("addratingpackaging" , userPackaging ,beername);
  }
 });



 //$("#rateit5").bind('rated', function (event, value) { $('#value5').text('You\'ve rated it: ' + value); });
 //$("#rateit5").bind('reset', function () { $('#value5').text('Rating reset'); });
 //$("#rateit5").bind('over', function (event, value) { $('#hover5').text('Hovering over: ' + value); });
