// if (Meteor.isClient) {
//   Template.results.rendered = function(Template){
//     this.$('.ui.dropdown').dropdown();
//     this.$('.ui.accordion').accordion();
//     this.$('.ui .item').on('click', function() {
//       $('.ui .item').removeClass('active');
//       $(this).addClass('active');
//    });
//    this.$('.demo.menu .item').tab({history:false});

//
// };
// }



Template.total.helpers({
  total: function() {
      return Beers.find({}, {sort: {beerRatingTotal: -1}});
}
});

Template.packaging.helpers({
  packaging: function() {
      return Beers.find({}, {sort: {packagingRatingDisplayAverage: -1}});
}
});

Template.taste.helpers({
  taste: function() {
      return Beers.find({}, {sort: {tasteRatingDisplayAverage: -1}});

}

});

// Template.results.events({
//   'click .button' : function(template) {
//     template.$.tab('change tab', 'total');
//   }
// });
