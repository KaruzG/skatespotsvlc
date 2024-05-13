"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../database/models/User"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { username, password } = body;
    const user = yield User_1.default.findOne({ username });
    const passwordCorrect = user === null
        ? false
        : yield bcrypt.compare(password, user.password);
    if (!(user && passwordCorrect)) {
        res.status(401).json({
            error: 'invalid user or password'
        });
        return false;
    }
    const userForToken = {
        id: user._id,
        name: user.username,
    };
    const token = jwt.sign(userForToken, process.env.SECRET);
    res.send({
        name: user.username,
        type: user.type,
        token: token
    });
}));
exports.default = router;
//# sourceMappingURL=login.js.map