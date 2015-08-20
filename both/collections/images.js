// var imageStore = new FS.Store.GridFS("images", {
//   maxTries: 1, // optional, default 5
//   chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
//                         // Default: 2MB. Reasonable range: 512KB - 4MB
// });

    var imageStore = new FS.Store.S3("images", {
      accessKeyId: "AKIAJZJFWXKAC4TIZTIQ",
      secretAccessKey: "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",
      bucket: "beerfest",
      maxTries: 2 ,   // optional, default 5
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).resize('460', '345').stream().pipe(writeStream);
      }

});
//
// var imageStoreSmall = new FS.Store.S3("imagesSmall", {
//   accessKeyId: "AKIAJZJFWXKAC4TIZTIQ",
//   secretAccessKey: "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",
//   bucket: "beerfest.small",
//   beforeWrite: function(fileObj) {
//     fileObj.size(20, {store: "imageStoreSmall", save: false});
//   },
//   transformWrite: function(fileObj, readStream, writeStream) {
//     gm(readStream, fileObj.name()).resize('20', '20').stream().pipe(writeStream);
//   }
// });


Images = new FS.Collection("images", {
  stores: [imageStore],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});
