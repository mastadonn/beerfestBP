Template.rating.rendered = function () {
  this.$('.rateit').rateit();
};

Template.rating.events({
  'click #rateitTaste' : function (event, template) {
    var userTaste = template.$('#rateitTaste').rateit('value'); // that's how you fetch the rating
    console.log(userTaste);
  }

});

Template.rating.events({
  'click #rateitPackaging' : function (event, template) {
    var userPackaging = template.$('#rateitPackaging').rateit('value'); // that's how you fetch the rating
     console.log(userPackaging);
  }
 });



 //$("#rateit5").bind('rated', function (event, value) { $('#value5').text('You\'ve rated it: ' + value); });
 //$("#rateit5").bind('reset', function () { $('#value5').text('Rating reset'); });
 //$("#rateit5").bind('over', function (event, value) { $('#hover5').text('Hovering over: ' + value); });
