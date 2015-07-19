Meteor.subscribe("beers");

Template.addbeer.events({
  "submit .new-beer": function (event) {
    // This function is called when the new task form is submitted
    var name = event.target.text.value,
      description = event.target.textarea.value,
      beerimage = Session.get("photo");


    //console.log(beerImage);

    Meteor.call("addBeer", name, description, beerimage);

      // Clear form
      event.target.text.value = "";
      event.target.textarea.value = "";

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
          width: 400,
          height: 300
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
    return Beers.find({});
}
});

Template.removebutton.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});
