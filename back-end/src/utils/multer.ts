import { FileFilterCallback } from "multer";
// # 인파블로그으
// https://stackoverflow.com/questions/59097119/using-multer-diskstorage-with-typescript
// https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/
export const multer = require("multer");

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const fileStorage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
  ) {
    // 저장위치
    callback(null, "src/public/images");
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ) {
    const uniqueSuffix = file.originalname + "-" + Date.now();
    callback(null, file.originalname);
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // callback(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
): void => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const multerUpload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 1000000 },
});
