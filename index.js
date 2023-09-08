const express = reqiure("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

const startServer = () => {
    app.listen(8000)
}

startServer();
