const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const eventsRouter = require("./events");
const categoriesRouter = require("./categories");

router.use("/users", usersRouter);
router.use("/events", eventsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;