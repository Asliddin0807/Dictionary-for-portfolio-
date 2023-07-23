const { addDictionary, engUzbek, uzbEng, addToWishlist, getWishlist, deleteItemWish } = require('../controllers/dictionary')
const router = require('express').Router()
const { authMiddleWare } = require('../middleware/authMiddleWare')


router.post('/add', addDictionary)
router.get('/eng', engUzbek)
router.get('/uzb', uzbEng)
router.post('/addWishlist/:id', authMiddleWare, addToWishlist)
router.get('/getWish', authMiddleWare, getWishlist)
router.delete('/delete/:idDic', authMiddleWare, deleteItemWish)


module.exports = router