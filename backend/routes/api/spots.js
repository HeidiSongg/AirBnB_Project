const express = require('express')
const router = express.Router();

const { Spot, SpotImage, User, Review, ReviewImage, Booking } = require('../../db/models')
const { requireAuth } = require("../../utils/auth")

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

router.post('/',requireAuth, async (req, res) => {

    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const newSpot = await Spot.create({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
        ownerId: req.user.id
    })
    
    return res.json(newSpot)
  })

  router.post('/:spotId/images',requireAuth, async (req, res) => {

    const spotId = req.params.spotId;
    const { url, preview } = req.body;

    const spot = await Spot.findByPk(spotId)

    const newImage= await SpotImage.create({
        url,
        preview,
        spotId: spot.id
      })
  
      return res.json(newImage)
  })

  router.put('/:spotId',requireAuth, async (req, res) => {

    const spotId = req.params.spotId;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const updateSpot = await Spot.findByPk(spotId)
     if (updateSpot) {
      await updateSpot.update({
        address, 
        city, 
        state, 
        country, 
        lat, 
        lng, 
        name, 
        description, 
        price
      });
      res.json(updateSpot)
    } else {
      res.status(404);
      res.json({
        "message": "Spot couldn't be found"
      })
    }
  })

 router.delete("/:spotId", requireAuth, async(req,res) =>{
    const spotId = req.params.spotId;

    const deleteItem = await Spot.findByPk(spotId);
  
    if (deleteItem) {
      await deleteItem.destroy()
      res.json({
        "message": "Successfully deleted",
        "statusCode": "200"
      })
    } else {
      res.status(404);
      res.json({
        "message": "Spot couldn't be found",
        "statusCode" : "404"
      })
    }
  })

// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req,res) => {
    const spotId = req.params.spotId;

    const review = await Review.findAll({
        where : {
        spotId : spotId
      },
      include: [
        {
            model: User
        },
        {
            model: ReviewImage
        }
    ]
    })

    if (review) {
        res.json({"Reviews" : review});    
    } else {
        res.json({
            "message": "Spot couldn't be found",
            "statusCode" : "404"
          })
    }
})

//Create a review for a spot based on the spot's id
router.post('/:spotId/reviews',requireAuth, async (req, res) => {

    const spotId = req.params.spotId;
    const { review, stars } = req.body;

    const spot = await Spot.findByPk(spotId)

    const newReview= await Review.create({
        review,
        stars,
        spotId: spot.id,
        userId: req.user.id
      })
  
      return res.json(newReview)
  })

// Get all Bookings by a Spot's id
router.get('/:spotId/bookings', async (req,res) => {
    const spotId = req.params.spotId;

    const booking = await Booking.findAll({
        where : {
        spotId : spotId
      },
      include: [
        {
            model: User
        }
    ]
    })

    if (booking) {
        res.json({"Bookings" : booking});    
    } else {
        res.json({
            "message": "Spot couldn't be found",
            "statusCode" : "404"
          })
    }
})

//Create a booking from a spot based on the spot's id
router.post('/:spotId/bookings',requireAuth, async (req, res) => {

    const spotId = req.params.spotId;
    const { startDate, endDate } = req.body;

    const spot = await Spot.findByPk(spotId)

    const newBooking= await Booking.create({
        startDate,
        endDate,
        spotId: spot.id,
        userId: req.user.id
      })
  
      return res.json(newBooking)
  })

module.exports = router;