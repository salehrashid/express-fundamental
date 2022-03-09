// const express = require('express')
// const app = express()
// const port = 3000

// // app.enable('case sensitive routing')

// app.get("/home", (req, res) => {
//     res.send('konfigurasi dengan in app configuration')
// })

// app.listen(port, () => {
//     console.log(`server listening on port ${port}`)
// })

//import doenv

require("dotenv").config();

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    // buat kondisi ketika kita jalankan 5000 maka portnya ada di production, else berarti di development

    let status = process.env.PORT == 5000? "Production" : "Development"
    res.send(`hai ngap, lu masuk sebagai : ${status} App`)
    re
})
app.listen(process.env.PORT, function(){
    console.log(`lu gunain port : ${process.env.PORT}`)
})