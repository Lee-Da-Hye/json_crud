const express = require('express');
const router = express.Router();
const {
    mainIndex,
    getAllUsers,
    getUser,
    userCreate,
    userUpdate,
    userDelete
} = require('../controller/root_controller');



router.get('/' , mainIndex)
router.get('/list' , getAllUsers)
router.get('/:userid' , getUser)
router.post('/' , userCreate)
router.put('/' , userUpdate)
router.delete('/' , userDelete)

module.exports = router;