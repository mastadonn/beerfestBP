if (Meteor.isClient) {
  // counter starts at 0
}

Template.navmenu.events({
  'click #homeSidebarToggle': function(){
    var element = $('#homeSidebar');
          element.sidebar('setting', 'transition', 'overlay');
          element.sidebar('toggle');

  }

});

Template.navmenubottom.events({
  'click #homeSidebarToggle': function(){
    var element = $('#homeSidebar');
          element.sidebar('setting', 'transition', 'overlay');
          element.sidebar('toggle');

  }

});

Template.appLayout.events({
  'click #homeSidebar': function(){
    var element = $('#homeSidebar');
          element.sidebar('setting', 'transition', 'overlay');
          element.sidebar('toggle');

  }

});
