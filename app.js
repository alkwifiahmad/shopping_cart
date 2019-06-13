const express = require("express")
const app = express()

// connect DataBase
const mongoose = require("mongoose")
mongoose.connect("mongodb://Alkwifi:Alkwifi1976@ds135049.mlab.com:35049/amz_company_db",{ useNewUrlParser: true }).then(()=>console.log("DataBase Connected")
)

// Get Schema
const Product = require("./models/Product")

app.get("/api/products",(req, res)=>{
/* res.send("adsfkl") */
    Product.find().then(result => res.send({express:result}))
    
     
 })

app.listen(5000,console.log("app running 5000")
)