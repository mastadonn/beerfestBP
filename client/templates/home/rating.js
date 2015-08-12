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


 Template.rating.events({
    'click .item' :  function(){
      var usertasteRating = Ratings.find({ beer: this._id , userID: this.userID, tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch();
      console.log(usertasteRating);
      if (usertasteRating === 0) { $('#rateitTaste').rateit('value', usertasteRating); }
      else{console.log("nothing found");}
}
  });
