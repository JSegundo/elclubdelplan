const express = require("express");
const app = express();
const volleyball = require("volleyball");
const morgan = require("morgan");
const cors = require("cors");
require("./config"); // --> require the db()
const router = require("./routes");

app.use(
  cors({
    origin: "http://localhost:3001/",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("tiny"));

router.use(volleyball);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(3001, () => {
  console.log(`server listening on http//:localhost:3001`);
});
