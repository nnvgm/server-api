const User = require('../models/users');
const httpStatus = require('../config/httpStatus');

async function GetUser(req, res) {
  try {
    const users = await User.find();

    return res.status(httpStatus.OK).json({
      message: 'Get all users',
      success: true,
      data: { users },
    });
  } catch (error) {
    console.log(`GetUser Error: ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Internal Server Error',
      success: false,
      data: null,
    });
  }
}

async function CreateUser(req, res) {
  try {
    const { name, phone } = req.body;

    const user = new User({
      name,
      phone,
    });

    await user.save();

    return res.status(httpStatus.CREATED).json({
      message: 'Create New User',
      success: true,
      data: { user },
    });
  } catch (error) {
    console.log(`CreateUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Internal Server Error',
      success: false,
      data: null,
    });
  }
}

async function UpdateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const user = await User.findById(id);

    user.name = name;
    user.phone = phone;

    await user.save();

    return res.status(httpStatus.OK).json({
      message: 'Update User',
      success: true,
      data: { user },
    });
  } catch (error) {
    console.log(`UpdateUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Internal Server Error',
      success: false,
      data: null,
    });
  }
}

async function DeleteUser(req, res) {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.status(httpStatus.OK).json({
      message: 'Delete User Success',
      success: true,
      data: null,
    });
  } catch (error) {
    console.log(`DeleteUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Internal Server Error',
      success: false,
      data: null,
    });
  }
}

module.exports = {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
};
