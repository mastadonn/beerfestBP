Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    console.log(done);
    Uploads.insert(fileInfo);
  }
})
