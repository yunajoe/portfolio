import { getDefaultPortPolioList } from "@/api/portpolio";
import BoardContents from "@/components/contents/BoardContents";
import { Suspense } from "react";

async function getDefaultPortPolios() {
  const result = await getDefaultPortPolioList();
  return result.data;
}

async function BoardPage() {
  const data = await getDefaultPortPolios();
  return (
    <Suspense>
      <BoardContents data={data.result} />
    </Suspense>
  );
}

export default BoardPage;
