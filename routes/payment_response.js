const router = require('express').Router();


router.get('/from/stripe', async (req, res) => {
    try {
        if(!res) return res.status(200).send({message: "Result not found"});
        return res.status(200).send({success: true, message: "Something i got"});
    } catch (e) {
        console.log("ERROR WHILE GETTING RESPONSE FROM STRIPE", e)
    }
});

router.get('/from/paypal', async (req, res) => {
    try {
        console.log(res);
        return res.status(200).json({success: true, res});
    } catch (e) {
        console.log("ERROR WHILE GETTING RESPONSE FROM STRIPE", e)
    }
});

module.exports = router;