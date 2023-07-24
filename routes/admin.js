const router = require('express').Router()
const { addAdmin, deleteAdmin, getAdmins, getUsers, userBlock } = require('../controllers/adminPanel')
const { isAdmin } = require('../middleware/isAdmin')

router.get('/all', isAdmin, getUsers)
router.post('/add/:userId', isAdmin, addAdmin)
router.get('/admins', isAdmin, getAdmins)
router.put('/deleteAdmin/:userId', isAdmin, deleteAdmin)
router.post('/block/:userId', isAdmin, userBlock)


module.exports = router

