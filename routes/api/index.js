const router = require("express").Router();
const boxRoutes = require("./boxes");

// Box routes
router.use("/boxes", boxRoutes);

module.exports = router;
