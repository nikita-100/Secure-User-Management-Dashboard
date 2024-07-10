const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "user 1",
            price: 10000
        },
        {
            name: "user 2",
            price: 20000
        }
    ])
});

module.exports = router;