const express = require('express');
const kalimantan = require('../controllers/kalimantan_controllers')
const petengoran = require('../controllers/petengoran_controllers')
const router = express.Router();

router.get('/kalimantan', kalimantan.getOneServiceKalimantan)
router.get('/kalimantan10', kalimantan.get10ServiceKalimantan)

router.get('/petengoran', petengoran.getOneServicePetengoran)
router.get('/petengoran10', petengoran.get10ServicePetengoran)

module.exports = router;
