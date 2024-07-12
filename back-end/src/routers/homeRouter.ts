import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import { getCompanyListQuery } from "../db/career";
import { getMajorListQuery, getSchoolListQuery } from "../db/school";
const crypto = require("crypto");

dotenv.config();

const homeRouter = Router();

homeRouter.get("/school/list", async (req: Request, res: Response) => {
  try {
    const data = await getSchoolListQuery();
    return res.send(data);
  } catch (err) {
    throw err;
  }
});
homeRouter.get("/school/list/search", async (req: Request, res: Response) => {
  const searchQuery = req.query.schoolName;
  try {
    const data = await getSchoolListQuery();
    const filteredData = data.filter((school: any) => {
      let isValid = true;
      if (school.schoolName.includes(searchQuery)) {
        isValid = true;
      } else {
        isValid = false;
      }
      return isValid;
    });
    return res.send(filteredData);
  } catch (err) {
    throw err;
  }
});

homeRouter.get("/major/list", async (req: Request, res: Response) => {
  try {
    const result = await getMajorListQuery();
    return res.send(result);
  } catch (err) {
    throw err;
  }
});
homeRouter.get("/company/list", async (req: Request, res: Response) => {
  try {
    const result = await getCompanyListQuery();
    return res.send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = homeRouter;
