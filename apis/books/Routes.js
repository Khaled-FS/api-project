const express = require("express");
const {
  getAllBooks,
  getOneBook,
  updateBook,
  createBook,
  deleteBook,
} = require("./Controllers");
const upload = require("../../middleWares/multer");
const booksRouter = express.Router();

booksRouter.get("/Books", getAllBooks);
booksRouter.get("/Books/:id", getOneBook);
booksRouter.post("/Books", upload.single("image"), createBook);
booksRouter.put("/Books/:id", updateBook);
booksRouter.delete("/Books/:id", deleteBook);

module.exports = booksRouter;
