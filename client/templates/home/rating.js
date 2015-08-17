Template.rating.rendered = function () {
  this.$('.ui.dropdown').dropdown();
  this.$('.rateit').rateit();

  // this.$('#rateitTaste').rateit('value');
  // this.$("#rateitPackaging").rateit('value',savedTasteRating);




};

Template.rating.helpers({
      tasteValue: function() {
        if (!this.userId) {
          if(!Ratings.findOne({ beer: this._id,userID: this.userID, tasteRating: {$gt: 0}})){}
          else{
        var savedTasteRating = Ratings.findOne({ beer: this._id,userID: this.userID }).tasteRating;
        return savedTasteRating;
      }
    }
},
      packagingValue: function() {
        if (!this.userId) {
          if(!Ratings.findOne({ beer: this._id,userID: this.userID, packagingRating: {$gt: 0}})){}
          else{
        var savedPackagingRating = Ratings.findOne({ beer: this._id,userID: this.userID }).packagingRating;
        return savedPackagingRating;
      }
      }
},
      voted: function() {
        if (!this.userId) {
          if(!Ratings.findOne({ beer: this._id,userID: this.userID, packagingRating: {$gt: 0}})){}
          else{  return "active";
          }
        }
      }
});



Template.rating.events({
  'click .vote' : function (event, template) {
    if(!Ratings.findOne({ beer: this._id,userID: this.userID, packagingRating: {$gt: 0}})){
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
