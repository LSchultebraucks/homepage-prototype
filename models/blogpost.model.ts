var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date:  { type: Date, default: Date.now },
  image: { type: Schema.Types.ObjectId, ref: "fs.files", required: true },
  tags:  [{type: String, required: true}]
});

module.exports = mongoose.model('blogpost', schema);