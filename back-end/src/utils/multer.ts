import { FileFilterCallback } from "multer";

// https://stackoverflow.com/questions/59097119/using-multer-diskstorage-with-typescript
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
    callback(null, "/uploads");
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ) {
    console.log("파일이닷", file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix);
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
