import { db } from ".";

export const getCompanyListQuery = async () => {
  try {
    const result = await db.collection("company").find().toArray();
    return result;
  } catch (err) {
    console.error("Error inserting user:", err);
    throw err;
  }
};
