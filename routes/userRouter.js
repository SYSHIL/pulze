const express =require('express')
const userRouter = require('./../controllers/userRouter')

const router = express.Router()

router.route('/home')
    .get(userRouter.getAllPatients);

router.route('/dashboard/:id')
    .get(userRouter.getPatient);

module.exports = router