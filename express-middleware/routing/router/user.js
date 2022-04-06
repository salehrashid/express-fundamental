const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

//membuat array dummy data berupa object yang nantinya akan di get
const users = [{
    id: 1,
    name: "saleh",
    email: "saleh@test.com"
  },
  {
    id: 2,
    name: "anjas",
    email: "anjas@test.com"
  },
  {
    id: 3,
    name: "yogi",
    email: "yogi@test.com"
  }
]

//menampilkan seluruh data
router.get("/user", (req, res, next) => {
  res.status(200).json({
    message: "anda berhasil menampilkan seluruh data",
    body: users
  })
})

//menampilkan sebuah data berdasarkan id
router.get("/user/:id", (req, res, next) => {
  const id = req.params.id;
  for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.id === parseInt(id)) {
      // res.status(200).json({
      //   message: "Data berhasil ditampilkan",
      //   body:user
      // })
      res.send(user)
      return next(router)
    }
  }
  res.send("is no user here");
})

//menambahkan request dengan method post

router.post(
  "/user",
  bodyParser.urlencoded({
    extended: true
  }), //middleware ini untuk mengambil request data body
  (req, res, next) => {
    const {
      name,
      email,
      wa
    } = req.body;
    if (!name || !email || !wa) {
      res.send({
        error: "need request and name"
      })
      return next("route");
    }
    const user = {
      id: users.length + 1,
      name,
      email,
      wa
    }
    //untuk menambahkan request user baru dan dimasukan ke array "users"
    users.push({
      user
    })

    //agar client bisa melihat request
    res.send({
      users
    })
  }
)

//route dengan method delete
router.delete(
  "/user:id", (req, res, next) => {

    //get id untuk di get di params
    const id = req.params.id

    //looping untuk mencari data id yang akan dihapus
    for (var i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.id === parseInt(id)) {
       
        //splice bisa dikatakan menghapus element, dan jika perlu, bisa menambahkan elemenrt yang terhapus
        users.splice(i, 1)
        // res.send({users})
        res.status(200).json({
          message: "anda berhasil menampilkan seluruh data",
          body: users
        })
        return next("route")
      }
    }
  }
)

module.exports = router