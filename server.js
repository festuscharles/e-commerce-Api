const express = require("express")
const products = require("./products")
const app = express()
const PORT = process.env.PORT || 3000

require("dotenv").config()



app.get("/", (req, res) => {
    res.send("Api is running")
})

app.get("/api/products", (req, res) => {
res.json(products)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))