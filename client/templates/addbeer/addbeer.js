Template.addbeer.events({
  "submit .new-beer": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    var string = event.target.string.value;
    var textarea = event.target.textarea.value;

      Beers.insert({
        name: text,
        rating: string,
        description: textarea,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
      event.target.number.value = "";
      event.target.textarea.value = "";

      // Prevent default form submit
      return false;
}
});
