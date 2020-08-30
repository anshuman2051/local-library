var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema({
    name : { type: String, required: true, maxlength : 100, minlength:3}
});

Genre
.virtual('url')
.get( ()=>'/catalog/genre/'+this._id);

module.exports = mongoose.model('Genre', Genre);