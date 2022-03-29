const express = require("express");
const app = express();
const volleyball = require("volleyball");
const morgan = require("morgan");
require("./config"); // --> require the db()
const router = require("./routes");

app.use(express.json());
app.use(morgan("tiny"));

router.use(volleyball);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(3001 ,() => {
    console.log(`server listening on http//:localhost:3001`)
})

