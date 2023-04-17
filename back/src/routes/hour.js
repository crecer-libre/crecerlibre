const {Router} = require('express');
const router = Router();
const { verifyToken } = require('../helpers/jwt');
const { createHour, scheduleHour } = require('../controllers/hour');

router.post('/create', verifyToken, createHour);
router.post('/schedule', scheduleHour);

module.exports = router;