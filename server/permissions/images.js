Images.allow({
    download: function(userId, fileObj) {
        return true;
    },
    update: function(userId, fileObj) {
        return true;
    },
    insert: function(userId, fileObj) {
        return true;
    }
});
