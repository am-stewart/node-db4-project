const router = require('express').Router();

router.use('*', (req, res, next) => {
    res.json({ api: 'up'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({ 
        customMessage: 'something went wrong in the recipe router!',
        message: err.message,

    })
})


module.exports = router