    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("qGpXCpo7gxKRoyBjm"))
            Roles.addUsersToRoles("qGpXCpo7gxKRoyBjm", ['admin']);
            Roles.addUsersToRoles("ocNSEDw3DsounEvov", ['mod']);

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "mod"}))
            Roles.createRole("mod");

        if(!Meteor.roles.findOne({name: "user"}))
            Roles.createRole("user");
    });


Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
