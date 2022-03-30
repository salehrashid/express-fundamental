const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

//membuat array dummy data berupa object yang nantinya akan di get
const users = [
  {
    id : 1,
    name : "saleh",
    email : "saleh@test.com"
  },
  {
    id : 1,
    name : "anjas",
    email : "anjas@test.com"
  },
  {
    id : 1,
    name : "yogi",
    email : "yogi@test.com"
  }
]

//menampilkan seluruh data
router.get("/user", (req, res, next) => {
  res.status(200).json({
    message: "anda berhasil menampilkan seluruh data"
    body: users
  })
})

module.exports = router
