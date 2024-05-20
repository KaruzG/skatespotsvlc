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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3 = void 0;
/* AWS S3 Client */
/* Not tested in vercel*/
const client_s3_1 = require("@aws-sdk/client-s3");
const uuid_1 = require("uuid");
require("dotenv/config");
const s3 = new client_s3_1.S3Client({ region: process.env.AWS_REGION });
const BUCKET = process.env.S3_BUCKET;
const uploadToS3 = (_a) => __awaiter(void 0, [_a], void 0, function* ({ file, spotId }) {
    const key = `spots/${spotId}/${(0, uuid_1.v4)()}`;
    const command = new client_s3_1.PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
    });
    try {
        yield s3.send(command);
        return { key };
    }
    catch (error) {
        console.log(error);
        return { error };
    }
});
exports.uploadToS3 = uploadToS3;
//# sourceMappingURL=s3.js.map