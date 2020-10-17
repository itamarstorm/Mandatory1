const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('public'))


const path = __dirname + "/public/"

app.get("/" , (req, res) => {
    return res.sendFile(path + "index/index.html")
})

app.get("/jquery", (req, res) => {
    return res.sendFile(path + "jQuery/jquery.html")
})

app.get("/nodejs", (req, res) => {
    return res.sendFile(path + "NodeJS/NodeJS.html")
})

app.get("/consolecmd", (req, res) => {
    return res.sendFile(path + "consolecmd/consolecmd.html")
})

app.get("/packages", (req, res) => {
    return res.sendFile(path + "packages/packages.html")
})

app.get("/javascript", (req, res) => {
    return res.sendFile(path + "javascript/javascript.html")
})

app.get("/http", (req, res) => {
    return res.sendFile(path + "http/http.html")
})

app.listen(8081, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("Server started on port", 8081)
})

