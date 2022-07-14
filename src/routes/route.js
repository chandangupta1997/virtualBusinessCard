const express = require('express');
const router = express.Router();

const businessCardController = require('../controllers/businessCardController')



router.post('/BusinessCard',businessCardController.createBusCard)

router.get('/BusinessCard/:cardId',businessCardController.getBusinessCard)










module.exports = router;