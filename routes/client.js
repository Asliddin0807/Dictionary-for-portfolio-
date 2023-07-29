const router = require('express').Router()
const { register, login, getUser, userStatus, forgetPassToken, resetPassword, uploadImg } = require('../controllers/client')
const { authMiddleWare } = require('../middleware/authMiddleWare')
const passport = require('passport')
const multer = require('../middleware/multer')



router.post('/register', register)
router.post('/login', login)
router.get('/user', authMiddleWare, getUser)
router.get('/status', authMiddleWare, userStatus)
router.post('/forgot', forgetPassToken)
router.post('/reset-password/:token', resetPassword)
router.put('/upload', authMiddleWare, multer.array("images", 10),  uploadImg)



router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))


router.get('/api/auth/google/callback', passport.authenticate('google', {
    failureRedirect: "/login"
}), (req, res) => {
    res.end('Log in!')
})

module.exports = router