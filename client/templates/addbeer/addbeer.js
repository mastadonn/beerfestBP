Meteor.subscribe("beers");

Template.addbeer.events({
  "submit .new-beer": function (event) {
    // This function is called when the new task form is submitted
    var name = event.target.text.value,
      description = event.target.textarea.value,
      beerImage = 'beer.jpg';//({image: file.name});

    //console.log(beerImage);

    Meteor.call("addBeer", name, description, beerImage);

      // Clear form
      event.target.text.value = "";
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
    return Beers.find({});
}
});

Template.removebutton.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});

Template.home.helpers({
  myCallbacks: function() {
    return {
        finished: function (index, file) {
    }
  };
  }
});
