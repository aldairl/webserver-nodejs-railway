require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

const hbs = require("hbs");

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// Server static files

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "El titulo", course: "El nombre del curso" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { title: "El titulo", course: "El nombre del curso" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { title: "El titulo", course: "El nombre del curso" });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
