const router = require('express').Router()
const { register, login, getUser } = require('../controllers/client')
const { authMiddleWare } = require('../middleware/authMiddleWare')

router.post('/register', register)
router.post('/login', login)
router.get('/user', authMiddleWare, getUser)



module.exports = router