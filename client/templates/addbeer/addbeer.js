Meteor.subscribe("beers");

Template.addbeer.events({
  "submit .new-beer": function (event) {
    // This function is called when the new task form is submitted
    var name = event.target.text.value,
      description = event.target.textarea.value,
      beerimage = Session.get("photo");

      if (!name || !beerimage) { alert('Beer name and photo required, time to stop drinking Mel'); return false;}
    //console.log(beerImage);

    Meteor.call("addBeer", name, description, beerimage);

      // Clear form
      event.target.text.value = "";
      event.target.textarea.value = "";
      Session.set("photo", "");
      // Prevent default form submit
      return false;
}
});

    Template.addbeer.helpers({
        photo: function () {
          return Session.get("photo");
        }
      });

    Template.addbeer.events({
      "click .takephoto": function () {
        var cameraOptions = {
          width: 640,
          height: 480
        };

        MeteorCamera.getPicture(cameraOptions, function (error, data) {
          Session.set("photo", data);
        });
      }
    });


Template.addbeerlist.events({
  'click .delete': function() {
    Meteor.call("deleteBeer", this._id);
  },

});

Template.addbeerlist.helpers({
    beers: function() {
      return Beers.find().fetch().reverse();
  }
  });

Template.removebutton.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});
