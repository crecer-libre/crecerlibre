const {Router} = require('express');
const router = Router();
const {
    getUsers
} = require('../controllers/professional');

router.get('', getUsers);

module.exports = router;