const express = require('express');
const Hell = require('../schemas/hell');

const router = express.Router();

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const hells = await Hell.find({});
      res.json(hells);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  .post(async (req, res, next) => {
    try {
      const hell = await Hell.create({
        moleNumber: req.body.moleNumber,
        respawnTime: req.body.respawnTime,
      });
      console.log(hell);
      res.status(201).json(hell);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route('/:moleNumber').delete(async (req, res, next) => {
  try {
    const result = await Mole.remove({ moleNumber: req.params.moleNumber });
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
