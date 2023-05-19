const {Router} = require('express');
const { findStudentByRut, registerStudent, getAllStudent } = require('../controllers/student');
const router = Router();


router.get('/:rut', findStudentByRut);
router.post('/register', registerStudent);
router.get('', getAllStudent);

module.exports = router;