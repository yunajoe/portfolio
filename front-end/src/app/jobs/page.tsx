import { getHiringDetailList } from "@/api/hiring";
import HiringContents from "@/components/contents/HiringContents";
import { Suspense } from "react";

async function getHiringList() {
  const result = await getHiringDetailList();
  return result.data;
}

async function HiringPage() {
  const data = await getHiringList();
  return (
    <Suspense>
      <HiringContents data={data} />;
    </Suspense>
  );
}

export default HiringPage;
