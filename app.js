const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const chatRoutes = require("./src/routes/routeChat");

//Cors
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

app.use(chatRoutes);

let port = process.env.SERVER_PORT || 9001;
app.listen(port, () => {
  console.log(`--> App listening on port ${port} <--`);
});
module.exports = app;
