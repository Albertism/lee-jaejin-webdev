var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
    page: {type: mongoose.Schema.Types.ObjectId, ref:"PageModel"},
    name: String,
    text: String,
    widgetType: String,
    created: {type: Date, default: Date.now}
}, {collection: "widget"});


module.exports = widgetSchema;

