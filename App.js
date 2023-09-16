const express = require("express")
const router = require("./src/Routes/user.routes")

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/v1",router)

module.exports = app