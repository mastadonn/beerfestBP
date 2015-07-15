Meteor.subscribe("beers");

Template.addbeer.events({
  "submit .new-beer": function (event) {
    // This function is called when the new task form is submitted
    var name = event.target.text.value;
    var rating = event.target.string.value;
    var description = event.target.textarea.value;


    Meteor.call("addBeer", name, description);

      // Clear form
      event.target.text.value = "";
      event.target.number.value = "";
      event.target.textarea.value = "";

      // Prevent default form submit
      return false;
}
});

Template.beerlist.events({
  'click .delete': function() {
    Meteor.call("deleteBeer", this._id);
  },

});

Template.beerlist.helpers({
  beers: function() {
return Beers.find({}) ;
}
});

Template.removebutton.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});
