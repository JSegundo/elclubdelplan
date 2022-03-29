const express = require("express");
const app = express();
const morgan = require("morgan");
const UserModel = require("./models/User");
 
app.use(express.json());
app.use(morgan("tiny"));

require("./config"); // --> require the db()

app.listen(3001 ,() => {
    console.log(`server listening on http//:localhost:3001`)
})