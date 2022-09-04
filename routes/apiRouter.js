const express = require('express');
const apiController = require('./../controllers/apiControllers')

const router = express.Router();

router.route('/users')
    .get(apiController.getAllUsers)
    .post(apiController.createUser)

router.route('/users/:id')
    .get(apiController.getUser)

router.route('/patient')
    .get(apiController.getAllPatients)
    .post(apiController.createPatient);

router.route('/patient/:id')
    .get(apiController.getPatient);

module.exports = router
