const {Router} = require('express');
const router = Router();
const { verifyToken } = require('../helpers/jwt');
const { 
    createHour, 
    scheduleHour, 
    updateHour, 
    getHoursByProfessional, 
    getHoursByProfessionals
} = require('../controllers/hour');

router.post('/create', verifyToken, createHour);
router.put('/update', verifyToken, updateHour);
router.post('/schedule', scheduleHour);
router.get('/professional-hours', verifyToken, getHoursByProfessional);
router.get('', getHoursByProfessionals);

module.exports = router;