"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    type: Number, // 0 - 1
    creation: Date
});
const User = (0, mongoose_1.model)('User', userSchema);
// We dont want to fetch password
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.password;
    }
});
exports.default = User;
//# sourceMappingURL=User.js.map