const Dictionary = require('../models/dictionary')
const asyncHandler = require('express-async-handler')
const Client = require('../models/auth')


const dictionary = [
    { text: "advertise", translate: "reklama qilmoq" },
    { text: "assign", translate: "tayinlamoq" },
    { text: "audience", translate: "tomoshabin" },
    { text: "breakfast", translate: "nonushta" },
    { text: "competition", translate: "musobaqa" },
    { text: "cool", translate: "salqin, ajoyib" },
    { text: "gain", translate: "erishmoq, ega bo'lmoq" },
    { text: "importance", translate: "ahamiyat" },
    { text: "knowledge", translate: "bilim" },
    { text: "major", translate: "katta" },
    { text: "mean", translate: "anglatmoq" },
    { text: "prefer", translate: "afzal ko'rmoq" },
    { text: "president", translate: "prezident" },
    { text: "progress", translate: "taraqqiyot" },
    { text: "respect", translate: "hurmat" },
    { text: "rich", translate: "boy" },
    { text: "skill", translate: "qobiliyat" },
    { text: "somehow", translate: "qandaydir yo'l bilan" },
    { text: "strength", translate: "kucht -quvvat" },
    { text: "vote", translate: "ovoz bermoq" },
    { text: "above", translate: "yuqorida" },
    { text: "ahead", translate: "oldinga" },
    { text: "amount", translate: "miqdor" },
    { text: "belief", translate: "e'tiqod" },
    { text: "center", translate: "markaz" },
    { text: "common", translate: "umumiy" },
    { text: "cost", translate: "xarajat" },
    { text: "demonstrate", translate: "namoyish qilmoq" },
    { text: "different", translate: "turli" },
    { text: "evidence", translate: "dalillar" },
    { text: "honesty", translate: "halollik" },
    { text: "idiom", translate: "ibora" },
    { text: "independent", translate: "mustaqil" },
    { text: "inside", translate: "ichida" },
    { text: "master", translate: "usta" },
    { text: "memory", translate: "xotira" },
    { text: "proper", translate: "to'g'ri" },
    { text: "scan", translate: "ko'rmoq" },
    { text: "section", translate: "bo'lim" },
    { text: "surface", translate: "sirt" },
]


const addDictionary = asyncHandler(async(req, res) => {
    const find = await Dictionary.findOne({
        id: 1
    })
    
    if(!find){
        const add = new Dictionary({
            id: 1,
            dictionaryData: [{
                text: 'Создать',
                translate: 'Create'
            }]
            
        })
        await add.save()
        res.status(200).json({ status: 200, data: add })
    }else{
        
        
        
        for(let i = 0; i < dictionary.length; i++){
            var addTo = await Dictionary.findOneAndUpdate(
                {
                    id: 1
                },
                {
                    $push: {
                        dictionaryData: dictionary[i]
                    }
                }, 
                { 
                    new: true 
                })
        }
        res.status(200).json({ status: 200, data: addTo })
    }
    
})

//get english - Uzbek
    const engUzbek = asyncHandler(async(req, res) => {
    const { words } = req.query
    let find = await Dictionary.findOne({ id: 1 })
    if(find){
    let app = find.dictionaryData.find(word => word.text === words)    
    if(!app){
        res.status(404).json({ message: 'Failure',  data: 'Nout found!'})
    }else{
        res.status(200).json({ message: 'Success',  translated: app})
    }
  
    }else{
        res.status(404).json({ message: 'Failure', data: 'Nout Found' })
    }
    
})

//Uzbek - English
const uzbEng = asyncHandler(async(req, res) => {
    const { words } = req.query
    let find = await Dictionary.findOne({ id: 1 })
    if(find){
    let app = find.dictionaryData.find(word => word.translate === words)    
    if(!app){
        res.status(404).json({ message: 'Failure',  data: 'Nout found!'})
    }else{
        res.status(200).json({ message: 'Success',  translated: app})
    }
  
    }else{
        res.status(404).json({ message: 'Failure', data: 'Nout Found' })
    }
})

// add to wishlist
const addToWishlist = asyncHandler(async(req, res) => {
    const { _id } = req.user
    const { id } = req.params
    const find = await Client.findById({ _id: _id })
    if(find){
        const alreadyAdded = find.favourite.filter(like => like._id === id)
        if(alreadyAdded){
            let add = await Client.findByIdAndUpdate(
                {
                    _id: find._id
                },
                {
                    $push: {
                        favourite: id
                    }
                },
                {
                    new: true    
                }
            )
    
            res.status(200).json({ message: 'Dictionary added!' })
        }else{
            res.status(403).json({ message: 'This dictionary already exsits!' })
        }
    }else{
        res.status(404).json({ message: 'Please sign in!' })
    }
})

//get wishlist 
const getWishlist = asyncHandler(async(req, res) => {
    const { id } = req.user
    const find = await Client.findById({ _id: id })
    if(find){
        res.status(200).json({ message: 'Success!', data: find.favourite })
    }else{
        res.status(404).json({ message: 'Failure!' })
    }
})

//delete from wishlist
const deleteItemWish = asyncHandler(async(req, res) => {
    const { id } = req.user
    const { idDic } = req.params
    const find = await Client.findById({ _id: id })
    if(find){
        let deleteItem = find.favourite.indexOf(idDic)
        if(deleteItem !== -1){
            find.favourite.splice(deleteItem, 1)
            await find.save()
        }else{
            return ;
        }
        res.status(200).json({ message: 'Deleted!' })
    }else{
        res.status(404).json({ message: 'Please sign in!' })
    }
})


module.exports = {
    addDictionary,
    engUzbek,
    uzbEng,
    addToWishlist,
    getWishlist,
    deleteItemWish
}


// 
