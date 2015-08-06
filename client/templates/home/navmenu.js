if (Meteor.isClient) {
  // counter starts at 0
}

Template.navmenu.events({
  'click #homeSidebarToggle': function(ev){
    var element = $('#homeSidebar');
          element.sidebar('setting', 'transition', 'overlay');
          element.sidebar('toggle');

  }

});
