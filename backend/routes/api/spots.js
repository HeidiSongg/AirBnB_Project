const express = require('express')
const router = express.Router();

const { Spot, SpotImage, User } = require('../../db/models')
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


module.exports = router;