const express = require('express');
const Mole = require('../schemas/mole');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const moles = await Mole.find({});
    res.render('mongoose', { moles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
