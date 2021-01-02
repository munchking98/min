const express = require('express');
const Mole = require('../schemas/mole');
const Hell = require('../schemas/hell');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const moles = await Mole.find({});
    const hells = await Hell.find({});
    res.render('mongoose', { moles, hells });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
