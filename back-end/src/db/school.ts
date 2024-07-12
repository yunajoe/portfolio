import { db } from ".";

export const getSchoolListQuery = async () => {
  try {
    const result = await db.collection("school").find().toArray();
    return result;
  } catch (err) {
    console.error("Error inserting user:", err);
    throw err;
  }
};

export const getMajorListQuery = async () => {
  try {
    const result = await db.collection("major").find().toArray();
    return result;
  } catch (err) {
    console.error("Error inserting user:", err);
    throw err;
  }
};
