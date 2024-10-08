import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
const CLOUDINARY = 'cloudinary';
@Injectable()
export class CloudinaryProvider {
  provide = CLOUDINARY;
  useFactory = (): ConfigOptions => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  };
}
