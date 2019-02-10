const router = require("express").Router();

const Candy = require("../db/models/Candy");

router.get("/", async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const candyId = req.params.id;
    const candy = await Candy.findById(candyId);
    res.json(candy);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
