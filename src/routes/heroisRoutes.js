const express = require('express');
const router = express.Router();
const heroisController = require('../controllers/HeroisController');

router.get('/herois', heroisController.getHerois);
router.post('/herois', heroisController.createHeroi);
router.put('/herois/:id', heroisController.updateHeroi);    
router.delete('/herois/:id', heroisController.deleteHeroi);

module.exports = router;