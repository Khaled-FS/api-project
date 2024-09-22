const { model, Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, default: 5 },
  image: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
