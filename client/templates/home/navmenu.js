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

Template.sidebarmenu.events({
  'click #homeSidebar': function(ev){
    var element = $('#homeSidebar');
          element.sidebar('setting', 'transition', 'overlay');
          element.sidebar('toggle');

  }

});
