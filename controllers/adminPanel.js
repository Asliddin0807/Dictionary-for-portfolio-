const Client = require('../models/auth')
const asyncHandler = require('express-async-handler')

// all users
const getUsers = asyncHandler(async(req, res) => {
    const { id } = req.admin
    
    const find = await Client.findById({ _id: id })
    if(find){
        const findUsers = await Client.findOne()
        res.status(200).json({ message: 'All users', data: findUsers })
    }else{
        res.status(404).json({ message: 'nout find users!' })
    }
})

//add admin
const addAdmin = asyncHandler(async(req, res) => {
    const { id } = req.admin
    const { userId } = req.params

    const find = await Client.findById({ _id: id })
    if(find){
        if(find.role == 'admin'){
            res.status(403).json({ message: 'This is admin!' })
        }else{
            const add = await Client.findByIdAndUpdate(
                {
                    _id: userId
                },
                {
                    role: 'admin'
                }
            )
            res.status(200).json({ message: 'Added to the list of admins!' })
        }
    }
})

//get admins 
const getAdmins = asyncHandler(async(req, res) => {
    const { id } = req.admin
    
    const find = await Client.findById({ _id: id })
    if(find){
        const getAdmins = find.role.includes('admin')
        res.status(200).json({ data: getAdmins })
    }else{
        res.status(404).json({ message: 'Not admins!' })
    }
})

//delete admins
const deleteAdmin = asyncHandler(async(req, res) => {
    const { id } = req.admin
    const { userId } = req.params
    const find = await Client.findById({ _id: id })
    if(find){
        const deleteAdmin = await Client.findByIdAndUpdate(
            {
                _id: userId
            },
            {
                role: 'user'
            },
            {
                new: true
            }
        )

        res.status(200).json({ message: 'Success!' })
    }else{
        res.status(404).json({ message: 'Not found!' })
    }
})

// user block
const userBlock = asyncHandler(async(req, res) => {
    const { id } = req.admin
    const { userId } = req.params
    const find = await Client.findById({ _id: id })
    if(find){
        const block = await Client.findByIdAndUpdate(
            {
                _id: userId
            },
            {
                isBlock: true
            },
            {
                new: true
            }
        )

        res.status(200).json({ message: 'user blocked!' })
    }else{
        res.status(404).json({ message: 'nout found' })
    }
})


module.exports = {
    addAdmin,
    getAdmins,
    deleteAdmin,
    getUsers,
    userBlock,
}