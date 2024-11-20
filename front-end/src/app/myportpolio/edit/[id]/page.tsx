import { searchCompany, searchMajor } from "@/api/actions/search";
import MyPortPolioEditContents from "@/components/contents/MyPortPolioEditContents";

async function getMajorList() {
  const res = await searchMajor();
  return res.data;
}

async function getCompanyList() {
  const res = await searchCompany();
  return res.data;
}

async function page() {
  const majorData = getMajorList();
  const companyData = getCompanyList();

  const [majorList, companyList] = await Promise.all([majorData, companyData]);

  return (
    <MyPortPolioEditContents majorList={majorList} companyList={companyList} />
  );
}

export default page;
