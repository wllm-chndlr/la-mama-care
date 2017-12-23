const router = require("express").Router();
const boxesController = require("../../controllers/boxesController");

// Matches with "/api/boxes"
router.route("/")
  .get(boxesController.findAll)
  .post(boxesController.create);

// Matches with "/api/boxes/:id"
router
  .route("/:id")
  .get(boxesController.findById)
  .put(boxesController.update)
  .delete(boxesController.remove);

module.exports = router;
