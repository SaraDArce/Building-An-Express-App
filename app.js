// app.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Part 1: Routes, Templates, and Views

// View engine
app.set("view engine", "pug");
app.set("views", "./views");

// Data
const navigationItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home", navigation: navigationItems });
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "About", navigation: navigationItems });
});

// Contact route with form
app
  .route("/contact")
  .get((req, res) => {
    res.render("contact", { title: "Contact", navigation: navigationItems });
  })
  .post((req, res) => {
    console.log("Received data:", req.body);
    res.send("Success!");
  });

// Route with a parameter
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.render("user", {
    title: "User Profile",
    userId,
    navigation: navigationItems,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
