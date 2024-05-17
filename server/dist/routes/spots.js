"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Spot_1 = __importDefault(require("../database/models/Spot"));
const multer_1 = __importStar(require("multer"));
const s3_1 = require("../services/s3");
const checkUserToken_1 = __importDefault(require("../middlewares/checkUserToken"));
const router = express_1.default.Router();
const storage = (0, multer_1.memoryStorage)();
const upload = (0, multer_1.default)({ storage });
router.post("/getSpots", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    const { spotId } = body;
    let params = {};
    if (spotId) {
        params = { spotId: spotId };
    }
    const ALL_SPOTS = yield Spot_1.default.find(params);
    if (!ALL_SPOTS) {
        return res.status(204);
    }
    return res.status(200).json(ALL_SPOTS);
}));
router.post('/', checkUserToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { coords, name, desc, type, stars, police } = body;
    const spotId = (yield Spot_1.default.countDocuments()) + 1;
    const spot = new Spot_1.default({
        spotId,
        coords,
        name,
        desc,
        type,
        stars,
        police,
    });
    const savedSpot = yield spot.save();
    res.json(savedSpot);
}));
router.post("/image", upload.single("file"), checkUserToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, file } = req;
    const { spotId, _id } = body;
    if (!file || !spotId || !_id)
        return res.status(400).json({ message: "Bad request" });
    const { error, key } = yield (0, s3_1.uploadToS3)({ file, spotId });
    if (error)
        return res.status(500).json({ message: error.message });
    const SPOT = yield Spot_1.default.findById(_id);
    SPOT.images.push(key);
    yield Spot_1.default.findOneAndUpdate({ _id: _id }, { images: SPOT.images }, { new: true });
    console.log("Image uploaded to spot with id [" + spotId + "]: " + key);
    return res.status(201).json({ key });
}));
exports.default = router;
//# sourceMappingURL=spots.js.map