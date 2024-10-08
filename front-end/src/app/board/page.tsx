import { getDefaultPortPolioList } from "@/api/portpolio";
import BoardContents from "@/components/contents/BoardContents";
import MainNavBar from "@/components/navbar/MainNavBar";
import { Suspense } from "react";

async function getDefaultPortPolios() {
  const result = await getDefaultPortPolioList();
  return result.data;
}

export default async function Page() {
  const data = await getDefaultPortPolios();
  return (
    <Suspense>
      <MainNavBar />
      <BoardContents data={data.result} />
    </Suspense>
  );
}
