"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const checkUserToken = (req, res, next) => {
    const authorization = req.get('authorization');
    let token = null;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET);
    }
    catch (_a) { }
    if (!token || decodedToken === undefined || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' });
    }
    else {
        next();
    }
};
exports.default = checkUserToken;
//# sourceMappingURL=checkUserToken.js.map