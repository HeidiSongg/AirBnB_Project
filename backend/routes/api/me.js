const express = require('express')
const router = express.Router();
const { requireAuth } = require('../../utils/auth')
const { User, Spot } = require('../../db/models')

router.get('/spots', requireAuth, async (req, res) => {

    const spots = await Spot.findAll({
        where: {
            ownerId : req.user.id
        }
    })
    res.json({"Spots" : spots})
})

module.exports = router;