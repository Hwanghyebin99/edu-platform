const router = require('express').Router();

router.get('/',(req, res) => {
    if(typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: 1
        });
    }

    res.json({
        success: true,
        info: req.decoded
    })
})

module.exports = router;
