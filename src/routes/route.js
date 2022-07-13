const express = require('express');
const router = express.Router();

const businessController = require('../controllers/businessController')



router.post('/BusinessCard',businessController.createBusCard)

router.get('BusinessCard/:cardId',businessController.getBusinessCard)










module.exports = router;