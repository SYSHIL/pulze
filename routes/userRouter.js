const express =require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.route('/home')
    .get(userController.getUserHome);

router.route('/dashboard/:id')
    .get(userController.getPatient);

module.exports = router