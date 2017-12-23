const router = require("express").Router();
const boxRoutes = require("./boxes");

// Book routes
router.use("/boxes", boxRoutes);

module.exports = router;
