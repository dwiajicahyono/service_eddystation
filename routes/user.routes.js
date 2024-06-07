const express = require('express');
const kalimantan = require('../controllers/kalimantan_controllers')
const router = express.Router();

router.get('/kalimantan', kalimantan.getOneServiceKalimantan)
router.get('/kalimantan10', kalimantan.get10ServiceKalimantan)

module.exports = router;
