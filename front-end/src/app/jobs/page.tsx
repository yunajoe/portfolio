import { getHiringDetailList } from "@/api/hiring";
import HiringContents from "@/components/contents/HiringContents";

async function getHiringList() {
  const result = await getHiringDetailList();
  return result.data;
}

async function HiringPage() {
  const data = await getHiringList();
  return <HiringContents data={data} />;
}

export default HiringPage;
