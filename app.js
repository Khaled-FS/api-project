// const express = require("express");
// const app = express();
// const postsRoutes = require("./api/posts/posts.routes");
// const connectDb = require("./database");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const cors = require("cors");
// const notFoundHandler = require("./middleWares/notFoundHandler");
// const errorHandler = require("./middleWares/errorHandler");
// const path = require("path");
// dotenv.config();
// const PORT = process.env.PORT;

// connectDb();
// //midlewares:
// app.use(express.json());
// app.use(morgan("dev"));
// app.use(cors());

// app.use("/posts", postsRoutes);
// app.use("/media", express.static(path.join(__dirname, "media")));

// app.use(notFoundHandler);
// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log("The app is running on localhost:8000");
// });

const express = require("express");
const booksRouter = require("./apis/books/Routes.js"); // Import the router
const connectDB = require("./database.js");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
const notFoundHandler = require("./middleWares/notFoundHandler.js");
const errorHandler = require("./middleWares/errorHandler.js");

// Other middleware and configurations can be added here
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Use the "Books" API router under the '/api' base URL
connectDB();
app.use("/api", booksRouter);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use(errorHandler);
app.use(notFoundHandler);

// Start the Express app
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
