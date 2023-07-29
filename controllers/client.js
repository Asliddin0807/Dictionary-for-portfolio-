const Client = require('../models/auth')
const asyncHandler = require('express-async-handler')
const { generateToken, refreshToken } = require('../config/tokens')
const forgetPass = require('../config/nodemailer')
const crypto = require('crypto')
const upload = require('../utils/cloudinary')
const path = require('path')
const fs = require('fs')



let date = new Date()
let time = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`

let pass;
let randomize = ''
function generateNumber(){
    for(let i = 0; i < 6; i++){
        var number = Math.floor((Math.random() * 6))
        randomize += number
    }
    return randomize
}

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
    
    const find = await Client.findOne({
        email: email
    })
    if(find){
        const findPassword = await Client.findOne({
            password: password
        })
        if(findPassword){
            res.status(200).json({ message: 'Success!', data: {
                username: find.username,
                email: find.email,
                token: refreshToken(find.id)
            }})
        }else{
            res.status(404).json({ message: 'Email or Password invalid!' })
        }
    }else{
        res.status(404).json({ message: 'Email or Password invalid!' })

    }
    console.log(email, password)
   
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

        res.json({ message: "active" })
    }else{
        res.json({ message: 'Pleace sign in!' })
    }
})

// picture for user profil
const uploadImg = asyncHandler(async(req, res) => {
    const { id } = req.user
    console.log(req.files)
    try{
        const uploader = (path) => upload(path, "images")
        const urls = []
        const files = req.files
        for(const file of files){
            const { path } = file
            const newPath = await uploader(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }
        const findProd = await Client.findByIdAndUpdate({
            _id: id
        },
        {
            image: urls.map((file) => {return file})
        }, 
        { new: true }
        )

        res.status(200).json({ message: findProd.image })
    }catch(error){
        res.status(404).json({ message: 'Nout found!'})
    }
    
})

const forgetPassToken = asyncHandler(async(req, res) => {
    const { email } = req.body
    const find = await Client.findOne({ email: email })
    if(!find){
        throw new Error('User not find')
    }else{
        try{
            const token = crypto.randomBytes(32).toString("hex")
            find.passwordResetToken = token
            find.passwordResetExpires = Date.now() + 30 * 60 * 1000 //10 minut
            await find.save()
            const resetUrl = `Привет пожалуйста нажмите на линк (срок линка истечёт через 10 минут)<a href='http://localhost:8000/reset-password/${token}'>Нажмите сюда</a>`
            const date = {
                from: 'kutubxona655@gmail.com',
                to: email,
                subject: "Hey🤫🤐👇🏼✍️👨‍💻",
                text: resetUrl
                // to: email,
                // from: 'Hey User',
                // subject: 'Forget Password Link',
                // htm: resetUrl
            }
    
            forgetPass(date)
            res.status(200).json({ message: 'Send to email'})
            
        }catch(error){
            res.status(404).json({ messgae: 'Nout found!'})
        }

    }

})

const resetPassword = asyncHandler(async(req, res) => {
    const { password } = req.body
    const { token } = req.params
    const heshedToken = crypto.createHash("sha256").update(token).digest("hex")
    const user = await Client.findOne({
        passwordResetToken: token,
        passwordResetExpires: {$gt: Date.now()}
    })

    if(!user){
        res.status(400).json({ message: 'Tekon Expired, Pleace try again leter!'})
    }

    user.password = password
    user.passwordResetToken = undefined
    await user.save()
    res.status(200).json({ message: 'Password is success changed!' })
})

module.exports = {
    register,
    login,
    getUser,
    userStatus,
    forgetPassToken,
    resetPassword,
    uploadImg
}