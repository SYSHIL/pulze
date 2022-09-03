const express = require('express');
const apiController = require('./../controllers/apiControllers')

const router = express.Router();

router.route('/users')
    .get(apiController.getAllUsers)
    .post(apiController.createUser)

router.route('/users/:id')
    .get(apiController.getUser)

module.exports = router
