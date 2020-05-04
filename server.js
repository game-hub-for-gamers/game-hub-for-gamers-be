const express = require("express")
const helmet = require("helmet") 
const cors = require("cors")

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

// links of componenets here


server.get("/", (req, res) => {
    res.status(200).json({response: "server is responding"})
})

module.exports = server