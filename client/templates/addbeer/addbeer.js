Meteor.subscribe("beers");
Meteor.subscribe("images");

Template.addbeer.events({
  "submit .newbeer": function (event) {
    // This function is called when the new task form is submitted
      event.preventDefault();
      var name = event.target.name.value,
      description = event.target.description.value,
      beerimage = Session.get("photo");

      if (!name || !beerimage) { alert('Beer name and photo required, time to stop drinking Mel'); return false;}

    //console.log(beerImage);

    Meteor.call("addBeer", name, description, beerimage);

      // Clear form
      event.target.name.value = "";
      event.target.description.value = "";
      Session.set("photo", "");

      // Prevent default form submit
      return false;
}
});

    Template.imageupload.helpers({
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


Template.imageupload.events({
  'change .fileinput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        Session.set("photo", fileObj.url({brokenIsFine: true}));
        console.log(err);
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});
