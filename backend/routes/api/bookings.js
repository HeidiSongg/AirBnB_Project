const express = require('express')
const router = express.Router();

const { requireAuth } = require("../../utils/auth")
const { User, Booking,Review, ReviewImage } = require('../../db/models')

//Edit a Booking
router.put('/:bookingId',requireAuth, async (req, res) => {

    const bookingId = req.params.bookingId;
    const { startDate, endDate } = req.body;

    const updateBooking = await Booking.findByPk(bookingId)
     if (updateBooking) {
      await updateBooking.update({
        startDate,
        endDate
      });
      res.json(updateBooking)
    } else {
      res.status(404);
      res.json({
        "message": "Booking couldn't be found"
      })
    }
  })

//Delete a booking
router.delete("/:bookingId", requireAuth, async(req,res) =>{
  const bookingId = req.params.bookingId;

  const deleteItem = await Booking.findByPk(bookingId);

  if (deleteItem) {
    await deleteItem.destroy()
    res.json({
      "message": "Successfully deleted",
      "statusCode": "200"
    })
  } else {
    res.status(404);
    res.json({
      "message": "Booking couldn't be found",
      "statusCode" : "404"
    })
  }
})  

module.exports = router;