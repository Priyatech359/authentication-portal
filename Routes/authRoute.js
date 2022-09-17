const express = require("express")
const router = express.Router()
const controller = require('../Controller/authController')    //import controller
//method of router
router.post('/register' , controller.register)
router.post('/login' , controller.login)
router.get('/data', controller.data)
router.delete('/delete/:email', controller.delete)



module.exports = router