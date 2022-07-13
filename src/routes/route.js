const express = require('express');
const router = express.Router();

const businessController = require('../controllers/businessController')



router.post('/createBusinessCard',businessController.createBusCard)

router.get('getBusinessCard',businessController.getBusinessCard)










module.exports = router;