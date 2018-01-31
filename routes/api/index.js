const router = require("express").Router();
const boxRoutes = require("./boxes");
const itemRoutes = require("./items");

// Box routes
router.use("/boxes", boxRoutes);
router.use("/items", itemRoutes);

module.exports = router;
