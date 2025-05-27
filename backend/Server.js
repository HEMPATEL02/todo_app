const express = require('express')
const mongoose=require('mongoose')
const cors=require("cors")
require('dotenv').config()
const routes=require('./routes/todoroute')
const app = express()
const PORT=process.env.port || 5000

app.use(express.json())
app.use(cors())
mongoose
  .connect(process.env.MONGODB_URL)
  .then(()=>console.log(`connect to mongodb...`))
  .catch((err)=>console.log(err))

app.use(routes)
app.listen(PORT, () => {console.log(`Example app listening on port ${PORT}`)})