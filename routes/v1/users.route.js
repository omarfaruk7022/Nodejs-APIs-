const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const router = express.Router();
router.route("/all").get(usersControllers.getAllUsers);

router.route("/").post(usersControllers.createUser);

router.route("/random").get(usersControllers.getRandomUsers);

router
  .route("/:id")
  .get(usersControllers.getUserById)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser)


module.exports = router;
