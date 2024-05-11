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
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const spots_1 = __importDefault(require("./routes/spots"));
require("dotenv/config");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use(cors());
app.listen(PORT);
mongoose_1.default.connect(process.env.MONGO_DB_URL);
// Routes
app.use('/api/users', users_1.default);
app.use('/api/spots', spots_1.default);
app.get("/", (req, res) => {
    res.send("NodeJs Up!");
});
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let dbStatus;
    switch (mongoose_1.default.connection.readyState) {
        case 0:
            dbStatus = "Disconnected";
            break;
        case 1:
            dbStatus = "Connected";
            break;
        case 2:
            dbStatus = "Connecting";
            break;
        case 3:
            dbStatus = "Disconnecting";
            break;
        default:
            dbStatus = "Error!";
            break;
    }
    res.send(`<h2> NodeJS: Running </h2><h2> DB Status: ${dbStatus} </h2>`);
}));
//# sourceMappingURL=index.js.map