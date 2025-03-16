const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
