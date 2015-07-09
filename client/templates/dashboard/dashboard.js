

Template.dashboard.events({
  "submit .new-item": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;

      Items.insert({
        name: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
  console.log("You clicked something");
  }


});
