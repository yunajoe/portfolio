import { getDefaultPortPolioList } from "@/api/portpolio";
import DefaultPortPolio from "@/components/data/DefaultPortPolio";
import { Suspense } from "react";

async function getDefaultPortPolios() {
  const result = await getDefaultPortPolioList();

  return result.data;
}

export default async function Page() {
  // 사람들의 홈페이지를 볼 수 있는 곳
  // 사람들의 default resume를 볼 수 있댜

  const data = await getDefaultPortPolios();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DefaultPortPolio data={data.result} />
    </Suspense>
  );
}
