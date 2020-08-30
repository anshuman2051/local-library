var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var  BookInstance = new Schema(
    {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
});

BookInstance
.virtual('url')
.get( ()=> '/catalog/bookInstance/'+this._id);

module.exports = mongoose.model("BookInstance", BookInstance);