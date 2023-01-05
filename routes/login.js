const express = require('express');
const router = express.Router();

router.app.post('/login' , (req, res)=>{
    res.send('목록 뿌리기');
})
router.app.get('/login' , (req, res)=>{
    res.send('목록 뿌리기');
})

module.exports = router;