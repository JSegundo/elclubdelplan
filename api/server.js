const express = require("express")
const app = express()

const PORT = 3000

app.get("/", (req,res) => {
    res.send("<h1>SERVER LEVANTADO!!</h1>")
})

app.listen(PORT ,() => {
    console.log(`server listening on http//:localhost:${PORT}`)
})