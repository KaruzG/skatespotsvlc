/* AWS S3 Client */
/* Not tested in vercel*/
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"
import 'dotenv/config'

const s3 = new S3Client({region: process.env.AWS_REGION});
const BUCKET = process.env.S3_BUCKET;

type uploadData = {file: Express.Multer.File, spotId: Number}

export const uploadToS3 = async ({file, spotId}:uploadData) => {
    const key = `spots/${spotId}/${uuid()}`
    console.log(key)
    const command = new PutObjectCommand({
        Bucket: BUCKET, 
        Key: key, 
        Body: file.buffer,
        ContentType: file.mimetype,

    })

    try {
        await s3.send(command)
        return { key } 
    } catch (error) {
        console.log("fuck")
        console.log(error)
        return { error } 
    }
}