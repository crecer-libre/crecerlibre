const {Router} = require('express');
const { findStudentByRut, registerStudent } = require('../controllers/student');
const router = Router();


router.get('/:rut', findStudentByRut);
router.post('/register', registerStudent);

module.exports = router;