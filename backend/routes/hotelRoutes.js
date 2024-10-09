const express = require('express');
const Hotel = require('../models/hotelModel');
const router = express.Router();

// Get all hotels
router.get('/', async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// Add new hotel
router.post('/', async (req, res) => {
  const { name, city, price } = req.body;
  const hotel = new Hotel({ name, city, price });
  await hotel.save();
  res.json(hotel);
});

// Update hotel
router.put('/:id', async (req, res) => {
  const { name, city, price } = req.body;
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, { name, city, price }, { new: true });
  res.json(hotel);
});

// Delete hotel
router.delete('/:id', async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Hotel deleted' });
});

module.exports = router;