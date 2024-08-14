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
      <div>포트폴리오 모음</div>
      <BoardContents data={data.result} />
    </Suspense>
  );
}
