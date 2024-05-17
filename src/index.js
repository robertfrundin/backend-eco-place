const express = require('express');

const userRouter = require('../routes/buyer.routes')
const sellerRouter = require('../routes/seller.routes')
const categoryRouter = require('../routes/category.routes')
const productRouter = require('../routes/product.routes')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use('/api', userRouter, sellerRouter, categoryRouter, productRouter)


app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})

