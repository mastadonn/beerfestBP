if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("vcc45BuvGuyE2dS67"))
            Roles.addUsersToRoles("vcc45BuvGuyE2dS67", ['admin']);

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "mod"}))
            Roles.createRole("mod");

        if(!Meteor.roles.findOne({name: "user"}))
            Roles.createRole("user");
    });
}
