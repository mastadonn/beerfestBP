Template.rating.rendered = function () {
  this.$('.ui.dropdown').dropdown();
  this.$('.rateit').rateit();

  // this.$('#rateitTaste').rateit('value');
  // this.$("#rateitPackaging").rateit('value',savedTasteRating);




};

Template.rating.helpers({
      tasteValue: function() {
        if (!this.userId) {
        var savedTasteRating = Ratings.findOne({ beer: this._id,userID: this.userID }).tasteRating,
        savedPackagingRating = Ratings.findOne({ beer: this._id,userID: this.userID }).packagingRating;
        console.log(savedTasteRating,savedPackagingRating );
        if (!savedTasteRating || !savedPackagingRating) {
          console.log("no votes found");
        }else{
          console.log("found saved votes");
        // value.$('#rateitTaste').rateit('value');
        // this.$("#rateitPackaging").rateit('value');
        return savedTasteRating;
      }
    }
},
      packagingValue: function() {
        if (!this.userId) {
        var savedTasteRating = Ratings.findOne({ beer: this._id,userID: this.userID }).tasteRating,
        savedPackagingRating = Ratings.findOne({ beer: this._id,userID: this.userID }).packagingRating;
        console.log(savedTasteRating,savedPackagingRating );
        if (!savedTasteRating || !savedPackagingRating) {
          console.log("no votes found");
        }else{
          console.log("found saved votes");
        // value.$('#rateitTaste').rateit('value');
        // this.$("#rateitPackaging").rateit('value');
        return savedPackagingRating;
      }
      }
}
});
// Template.rating.events({
//   'click .userRatings' : function (event, template) {
//     if (!this.userId) {
//     var savedTasteRating = Ratings.findOne({ beer: this._id,userID: this.userID }).tasteRating,
//     savedPackagingRating = Ratings.findOne({ beer: this._id,userID: this.userID }).packagingRating;
//     console.log(savedTasteRating,savedPackagingRating );
//     if (!savedTasteRating || !savedPackagingRating) {
//       console.log("no votes found");
//     }else{
//       console.log("found saved votes");
//     this.$('#rateitTaste').rateit('value');
//     this.$("#rateitPackaging").rateit('value',savedTasteRating);
//     }
//     }
// }
//
//     });


Template.rating.events({
  'click .vote' : function (event, template) {
    var userTaste = template.$('#rateitTaste').rateit('value'),
    userPackaging = template.$('#rateitPackaging').rateit('value'),
    beerId = this._id;
    if (!userPackaging || !userTaste) { alert('Please rate beer before Voting'); return false;}
    var element = $("#vote");
    element.addClass("active");

    Meteor.call("updaterating" ,beerId, userTaste ,userPackaging);
    console.log("voted",beerId, userTaste ,userPackaging );
}
});

// Template.rating.events({
//   'click .rateit' : function () {
//     var userratings = Ratings.find({ beer: this._id ,userID: this.userID }).fetch();
//     console.log(userratings);
// }
// });
//
// Template.rating.events({
//   'click #rateitTaste' : function (event, template) {
//     var beerId = this._id,
//     userTaste = template.$('#rateitTaste').rateit('value'); // that's how you fetch the rating
//     console.log(userTaste,beerId);
//     Meteor.call("addratingtaste" ,userTaste ,beerId);
//   }
//
// });
//
// Template.rating.events({
//   'click #rateitPackaging' : function (event, template) {
//     var beerId = this._id,
//     userPackaging = template.$('#rateitPackaging').rateit('value'); // that's how you fetch the rating
//     //    Session.set("selectedBeer", beerId);
//      console.log(userPackaging, beerId);
//      Meteor.call("addratingpackaging" , userPackaging ,beerId);
//   }
//  });

// userValue = template.$('#rateitTaste').rateit('value');

// Template.rating.events({
//   'change userValue': function (event, template) {
//       console.log("got it");
//    var beerId = this._id,
//    userTaste = template.$('#rateitTaste').rateit('value'); // that's how you fetch the rating
//    userPackaging = template.$('#rateitPackaging').rateit('value'); // that's how you fetch the rating
//    Meteor.call("updaterating" ,userTaste ,userPackaging, beerId);
//  }
//  });

//  Template.rating.events({
//     'click .item' :  function(){
//       var usertasteRating = Ratings.find({ beer: this._id , userID: this.userID, tasteRating: {$gt: 0} },{fields: {tasteRating: 1 }} ).fetch();
//       console.log(usertasteRating);
//       if (usertasteRating === 0) { $('#rateitTaste').rateit('value', usertasteRating); }
//       else{console.log("nothing found");}
// }
//   });
