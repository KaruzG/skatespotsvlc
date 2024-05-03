"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const spotSchema = new mongoose_1.Schema({
    spotId: Number,
    coords: { alt: Number, lat: Number },
    name: String,
    desc: String,
    type: Number,
    stars: Number,
    police: Number,
    comments: [
        {
            user_id: {
                type: Number,
                ref: 'User'
            },
            comment: String,
        }
    ]
});
const Spot = (0, mongoose_1.model)('Spot', spotSchema);
exports.default = Spot;
//# sourceMappingURL=Spot.js.map