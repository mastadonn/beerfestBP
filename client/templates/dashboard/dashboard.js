

Template.dashboard.events({
  "submit .new-item": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    var string = event.target.string.value;
    var textarea = event.target.textarea.value;

      Items.insert({
        name: text, rating: string, description: textarea,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
      event.target.number.value = "";
      event.target.textarea.value = "";

      // Prevent default form submit
      return false;
  console.log("You clicked something");
  }


});
