const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/',mainController.create);
router.post('/',mainController.create);

module.exports=router;
