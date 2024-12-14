console.log("First Backend");
require('dotenv').config() 
//common js (style of javascript)
const express = require('express')
//module js
//import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(rep, res) => {
  res.send("vanshpratapsingh__")
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube', (req,res) => {
    res.send('<h2>chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})