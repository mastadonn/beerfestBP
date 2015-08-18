Template.rating.rendered = function () {
  this.$('.ui.dropdown').dropdown();
  this.$('.rateit').rateit();

  // this.$('#rateitTaste').rateit('value');
  // this.$("#rateitPackaging").rateit('value',savedTasteRating);




};

Template.rating.helpers({
      tasteValue: function() {
        var thisUser = Meteor.userId();
        if (!thisUser) {}
        else{
          if(!Ratings.findOne({ beer: this._id,userId: thisUser, tasteRating: {$gt: 0}})){}
          else{
        var savedTasteRating = Ratings.findOne({ beer: this._id,userId: thisUser }).tasteRating;
        return savedTasteRating;
      }
    }
},
      packagingValue: function() {
        var thisUser = Meteor.userId();
        if (!thisUser) {}
          else{
          if(!Ratings.findOne({ beer: this._id,userId: thisUser, packagingRating: {$gt: 0}})){}
          else{
        var savedPackagingRating = Ratings.findOne({ beer: this._id,userId: thisUser }).packagingRating;
        return savedPackagingRating;
      }
      }
},
      voted: function() {
        var thisUser = Meteor.userId();
        if (!thisUser) {}
        else{
          if(!Ratings.findOne({ beer: this._id,userId: thisUser, packagingRating: {$gt: 0}})){}
          else{  return "active";
          }
        }
      }
});



Template.rating.events({
  'click .vote' : function (event, template) {
    var thisUser = Meteor.userId();
    if(!Ratings.findOne({ beer: this._id,userId: thisUser, packagingRating: {$gt: 0}})){
    var userTaste = template.$('#rateitTaste').rateit('value'),
    userPackaging = template.$('#rateitPackaging').rateit('value'),
    beerId = this._id;
    if (!userPackaging || !userTaste) { alert('Please rate beer before Voting'); return false;}
    var element = $("#vote");
    element.addClass("active");

    Meteor.call("updaterating" ,beerId, userTaste ,userPackaging);
    }
}
});
