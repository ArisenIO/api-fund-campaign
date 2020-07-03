const router = require('express').Router();


router.get('/', async (req, res) => {

    res.send({message: 'Test this api'});
})

module.exports = router;