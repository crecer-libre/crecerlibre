const {Router} = require('express');
const router = Router();
const { verifyToken } = require('../helpers/jwt');
const { 
    createHour, 
    scheduleHour, 
    updateHour, 
    getHoursByProfessional, 
    getHoursByProfessionals,
    getHourById,
    generateObservationById,
    getAllHours
} = require('../controllers/hour');

router.post('/create', createHour);
router.put('/update', verifyToken, updateHour);
router.put('/schedule', scheduleHour);
router.get('/professional-hours/:id', getHoursByProfessional);
router.get('', getHoursByProfessionals);
router.get('/admin', getAllHours);
router.get('/:id', getHourById);
router.post('/observation/:id', generateObservationById);


module.exports = router;