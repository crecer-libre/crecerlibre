const jwt = require('jsonwebtoken');

const generateJWT = ( id, username, role ) => {
    const payload = { id, username, role };
    const privateKey = process.env.JWT_SECRET;
    
    const accessToken = jwt.sign(payload, privateKey, { expiresIn: '1h'});
    const refreshToken = jwt.sign(payload, privateKey, { expiresIn: '7h'});

    return [accessToken, refreshToken];
};

const decodeToken = ( token ) => {

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
             if (err) {
                 reject('Error decode token');
             } else {
                 resolve(data);
             };
        });
    });
};

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({
            msg: 'Token is required.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {username} = decoded;

    } catch (error) {
        return res.status(401).json({
            msg: 'Invalid Token.'
        });
    }

    return next();

};

module.exports = {
    generateJWT,
    decodeToken,
    verifyToken
}