const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/songs', meController.storedSongs)
router.get('/trash/songs', meController.trashSongs)

module.exports = router;