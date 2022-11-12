const express = require('express')
const router = express.Router();

const { Spot, SpotImage, User } = require('../../db/models')

router.get('/', async (req,res) => {
    const spots = await Spot.findAll();
    res.json({"Spots" : spots})
})

router.get('/:spotId', async (req,res) => {
    const spotId = req.params.spotId;

    const spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: SpotImage
            },
            {
                model: User, as: 'Owner'
            }
]
})
    return res.json(spot);    
})


module.exports = router;