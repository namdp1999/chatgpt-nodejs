const express = require("express");
const route = express.Router();
const controllerChat = require("../controller/controllerChat");

route.post("/chat", controllerChat.postChat);

module.exports = route;
