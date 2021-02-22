const express = require("express");
const router = new express.Router();

const {
  getAllUsersController,
  getUsersByIdController,
  addNewUserController,
  deleteUserByIdController,
} = require("../controllers/user-Controller");

router.get("/getAllUsers/:userId", getAllUsersController);
router.get("/getUsersById/:userId",getUsersByIdController);
router.post("/addNewUser",addNewUserController);
router.delete("/deleteUserById/:userId",deleteUserByIdController);

module.exports = router;
