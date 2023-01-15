const isEmpty = require('is-empty')
const user = require("../Model/model")
module.exports = {
    register: async function (req, res) {


        const userExist = await user.findOne({ Email: req.body.Email })
        //console.log(userExist)
        if (!userExist) {
            newUser = new user({
                Name: req.body.name,
                Email: req.body.Email,
                Password: req.body.password,
                Address: req.body.address
            })
            await newUser.save()
            return res.json({
                message: "welcome to authenticated portal",
                id: newUser._id

            })
            //return res.send("Your name has been saved successfully")
        } else {
            res.json({ message: 'This email id already exist' })
        }
        


    },
    login: async function (req, res) {
        console.log(req.body)
        const userExist = await user.findOne({ Email: req.body.Email })     // user.find return an array
        /*Email: req.body.Email,
        Password: req.body.password
    })*/
        console.log(req.body)
        if (!userExist) {
            res.json({
                message: "Invalid emailAddress"
            })
        }
        else if (req.body.password === userExist.Password) {
            res.json({
                message: "Successfully logged in",
                userId: userExist._id
            })
        }
        else {
            res.json({
                message: "Invalid  password"
            })
        }
    },

    data: async function (req, res) {
        const result = await user.find()
        res.json({
            message: "List of all Users",
            number_of_users: result.length,
            list: result
        })

    },
    delete: async function (req, res) {
        const emailExist = await user.findOne({ Email: req.params.email })
        if (!emailExist) {
            res.status(400).send("Email does not exist")
        } else {
            await user.deleteOne({ Email: req.params.email })
            res.send(emailExist.Email + "'s account is deleted successfully")
        }
    }
}
/*const x = {                               // x is an object 
    Name : "Priya gupta" ,                 //  Name ,Age ,Address are index name just like in array
    Age : 22 ,
    Address : "Patna" 

}              
console.log (x.Age)*/
// request = {
//     body:      ,
//     params:     ,
//     query:       
// }
// response = {
//     send:        ,    // this is a function
//     redirect:     ,    // this is a function
// }