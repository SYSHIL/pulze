const express =require('express')
const homeRouter = require('./../controllers/homeController')

const router = express.Router()

router.route('/home')
    .get(homeRouter.getHomePage);

router.route('/about')
    .get(homeRouter.getAboutPage);

module.exports = router