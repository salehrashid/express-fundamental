const express = require("express")
const bodyParser = require("body-parser") //untuk memparse data dari request

//membuat instance
const router = express.Router()

//router method GET
router.get("/", (req, res, next) => {
    res.send("Goodbye, atong");

    router.post(
        "/",
        bodyParser.json(),
        bodyParser.urlencoded({
            extended: true
        }),
        (req, res, next) => {
            res.send(req.body)
        }
    )

    //route methode DELETE
    router.delete("/:id", (req, res, next) => {
        res.send(`Data dengan id ${req.params.id} was removed`)
    })
})

//export router agar bisa dipanggil di index utama (main index)
module.exports = router
