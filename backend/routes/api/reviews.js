const express = require('express')
const router = express.Router();

const { requireAuth } = require("../../utils/auth")
const { User, Review, ReviewImage } = require('../../db/models')


//Add an Image to a Review based on the Review's id
router.post('/:reviewId/images',requireAuth, async (req, res) => {

    const reviewId = req.params.reviewId;
    const { url } = req.body;

    const review = await Review.findByPk(reviewId)

    const newReview= await ReviewImage.create({
        url,
        reviewId: review.id
      })
  
      return res.json(newReview)
  })

//Edit a Review
router.put('/:reviewId',requireAuth, async (req, res) => {

    const reviewId = req.params.reviewId;
    const { review, stars } = req.body;
    const updateReview = await Review.findByPk(reviewId)
     if (updateReview) {
      await updateReview.update({
        review,
        stars
      });
      res.json(updateReview)
    } else {
      res.status(404);
      res.json({
        "message": "Review couldn't be found"
      })
    }
  })

module.exports = router;