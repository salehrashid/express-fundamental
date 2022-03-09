//import module express
const express = require('express');

//default port express
const port = 3000

//create express app
const app = express()

//create routing / bisa menggunakan express middleware
app.get('/', (req, res) =>{
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
