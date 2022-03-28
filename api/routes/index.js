const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const eventsRouter = require("./events");

router.use("/users", usersRouter);
router.use("/events", eventsRouter);

module.exports = router;