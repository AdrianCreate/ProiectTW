const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");

app.use("/resurse", express.static(path.join(__dirname, "resurse")));

app.get("/", (req, res) => {
  res.render("pagini/index");
});

console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
console.log("process.cwd():", process.cwd());
//dirname ofera calea catre directorul fisierului curent si process.cwd()
//si process.cwd ofera directorul de lucru al procesului Node.js

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
