const {Router} = require('express');
const router = Router();
const {
    login,
    refreshToken,
    register,
} = require('../controllers/auth');

router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refreshToken);

module.exports = router;