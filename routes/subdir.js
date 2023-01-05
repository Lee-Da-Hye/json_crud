const express = require('express');
const router = express.Router();

router.app.get('/subdir', (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'newpage.html'))
})
module.exports = router;