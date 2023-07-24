const router = require('express').Router()
const { register, login, getUser, userStatus } = require('../controllers/client')
const { authMiddleWare } = require('../middleware/authMiddleWare')
const passport = require('passport')


router.post('/register', register)
router.post('/login', login)
router.get('/user', authMiddleWare, getUser)
router.get('/status', authMiddleWare, userStatus)

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))


router.get('/api/auth/google/callback', passport.authenticate('google', {
    failureRedirect: "/login"
}), (req, res) => {
    res.end('Log in!')
})

module.exports = router