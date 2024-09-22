const book = require("../../models/book");

const getAllBooks = async (req, res, next) => {
  try {
    const Books = await book.find();
    return res.json({ books: Books });
  } catch (error) {
    next(error);
  }
};
const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Books = await book.findById(id);
    return res.json({ books: Books });
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await book.create(req.body);
    return res.status(201).json({ message: "created", data: newBook });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await book.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await book.findByIdAndDelete(id, req.body);
    return res.status(200).json(deleted);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllBooks,
  updateBook,
  createBook,
  deleteBook,
  getOneBook,
};
