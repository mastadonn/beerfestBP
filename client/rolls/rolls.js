Template.admin.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});

Template.mod.helpers({
    // check if user is an admin
    isModUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['mod']);
    }
});
