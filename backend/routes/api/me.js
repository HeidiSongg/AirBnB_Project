const express = require('express')
const router = express.Router();
const { requireAuth } = require('../../utils/auth')
const { User, Spot, Review, ReviewImage, Booking } = require('../../db/models')

router.get('/spots', requireAuth, async (req, res) => {

    const spots = await Spot.findAll({
        where: {
            ownerId : req.user.id
        }
    })
    res.json({"Spots" : spots})
})

router.get('/reviews', requireAuth, async (req, res) => {

    const reviews = await Review.findAll({
        where: {
            userId : req.user.id
        },
        include : [
            {
                model: User
            },
            {
                model: Spot
            },
            {
                model: ReviewImage
            }
    ]
    })
    res.json({"Reviews" : reviews})
})

router.get('/bookings', requireAuth, async (req, res) => {

    const reviews = await Booking.findAll({
        where: {
            userId : req.user.id
        },
        include : [
            {
                model: Spot
            }
    ]
    })
    res.json({"Bookings" : reviews})
})

module.exports = router;