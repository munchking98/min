const express = require('express');
const Mole = require('../schemas/mole');

const router = express.Router();

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const moles = await Mole.find({});
      res.json(moles);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const mole = await Mole.create({
        moleNumber: req.body.moleNumber,
        cutTime: req.body.cutTime,
        respawnTime: req.body.respawnTime,
        moleState: req.body.moleState,
      });
      console.log(mole);
      res.status(201).json(mole);
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
