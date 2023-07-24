const Client = require('../models/auth')
const asyncHandler = require('express-async-handler')
const { generateToken, refreshToken } = require('../config/tokens')
let date = new Date()
let time = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`


//registration
const register = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body
    const find = await Client.findOne({
        username: username,
        email: email,
    })
    if(find){
        res.status(403).json({ message: 'User already exsits!' })
    }else{
        const create = await Client.create(req.body)
        await create.save()
        res.status(200).json({ message: 'Success!', data: {
            username: create.username,
            email: create.email,
            password: create.password,
            token: generateToken(create.id)
        }})
    }
})


//login
const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    const find = await Client.findOne({})
    if(find.email === email && find.password === password){
        res.status(200).json({ message: 'Success!', data: {
            username: find.username,
            email: find.email,
            token: refreshToken(find.id)
        }})
    }else{
        res.status(404).json({ message: 'Email or Password invalid!' })
    }
})


//get user 
const getUser = asyncHandler(async(req, res) => {
    const { id } = req.user
    const find = await Client.findById({_id: id})
    if(find){
        res.status(200).json({ message: "Success!", data: find })
    }else{
        res.status(404).json({ message: 'Nout found!' })
    }
})

// user status 
const userStatus = asyncHandler(async(req, res) => {
    const { id } = req.user

    const find = await Client.findById({ _id: id })
    if(find){
        let time = Date.now()
        const date = new Date(time)
        const watch = date.toLocaleString()
        const update = await Client.findByIdAndUpdate(
            {
                _id: find._id
            },
            {
                userStatus: [{
                    watch: watch.slice(12, watch.length),
                    date: watch.slice(0, 10)
                }]
            },
            {
                new: true
            }
        )

        res.json({ message: "yest" })
    }else{
        res.json({ message: 'Pleace sign in!' })
    }
})

//tarif 
const tarifUser = asyncHandler(async(req, res) => {
    const { id } = req.user
})

module.exports = {
    register,
    login,
    getUser,
    userStatus
}