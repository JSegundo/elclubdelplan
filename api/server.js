const express = require("express")
const app = express()
const routes = require("./routes");
const PORT = 3000

app.use(express.json());


app.use("/api", routes);

app.get("/", (req,res) => {
    res.send("<h1>SERVER LEVANTADO!!</h1>")
})

app.listen(PORT ,() => {
    console.log(`server listening on http//:localhost:${PORT}`)
})