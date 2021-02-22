const { throwError } = require("rxjs");
const UserModel = require("../models/user-model");

module.exports = {
  getAllUsersController: async (req, res, next) => {
    try {
      const data = await UserModel.find({HeadId:req.params.userId});
      res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  getUsersByIdController: async (req, res, next) => {
    try {
      const data = await UserModel.findOne({ _id: req.params.userId });
      res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  addNewUserController: async (req, res, next) => {
    try {
      const {_id, name, age, sallery, phoneNumber } = req.body;
      if(!_id){
          throw new Error("Unauthorized");
      }
      const newUser = new UserModel({
        HeadId:_id, name:name, age:age, sallery:sallery, phoneNumber:phoneNumber
      });
      await newUser.save();
      res.json({
        success: true,
        message: "successful",
      });
    } catch (error) {
      next(error);
    }
  },
  deleteUserByIdController: async (req, res, next) => {
    try {
      const _id = req.params.userId;
      const data = await UserModel.deleteOne({ _id: _id });

      if (data.deletedCount !== 0) {
        res.json({
          success: true,
          message: "Successfully Deleted",
        });
      } else {
        res.json({
          success: false,
          message: "Failed to Delete",
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
