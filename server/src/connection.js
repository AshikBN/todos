const mongoose = require("mongoose");

const DB =
  "mongodb+srv://bnash:ft9Tr8iN1Pjz6RJl@cluster0.sytwcqm.mongodb.net/TodoAPP?retryWrites=true&w=majority";

const connection = mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e.message);
  });

module.exports = connection;
