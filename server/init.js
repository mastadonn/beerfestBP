Meteor.startup(function () {
  UploadServer.init({
    tmpDir: '/Users/d_cosby/Documents/meteor/Uploads/tmp',
    uploadDir: '/Users/d_cosby/Documents/meteor/Uploads/',
    checkCreateDirectories: true //create the directories for you
  })
});
