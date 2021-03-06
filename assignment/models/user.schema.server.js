var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
    {username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref:"WebsiteModel"}],   //1. arrays of references
        isAdmin: {type: Boolean, default: false}
    }, {collection: "user"});

module.exports = userSchema;