const express = require('express');
const router = express.Router();
const loginCtrl = require('../controller/loginCtrl')

router.post('/main', loginCtrl.fdsa);


module.exports = router;
