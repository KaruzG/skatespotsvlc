"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use('/api/users', users_1.default);
app.get("/", (req, res) => {
    res.send("NodeJs Up!");
});
app.listen(PORT);
//# sourceMappingURL=index.js.map