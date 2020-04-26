const express = require('express');
const UserController = require('../../../controllers/users');

const router = express.Router();

router.get('/', UserController.GetUser);
router.post('/', UserController.CreateUser);
router.put('/:id', UserController.UpdateUser);
router.delete('/:id', UserController.DeleteUser);

module.exports = router;
