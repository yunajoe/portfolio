import { getDefaultPortPolio } from "@/api/portpolio";
import DefaultPortPolio from "@/components/data/DefaultPortPolio";
import { Suspense } from "react";

// https://velog.io/@miso1489/SassSCSS-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-mixin

async function getDefaultPortPolios() {
  const result = await getDefaultPortPolio();
  return result;
}

export default async function Page() {
  // 사람들의 홈페이지를 볼 수 있는 곳
  // 사람들의 default resume를 볼 수 있댜

  const defaultPortPolios = await getDefaultPortPolios();
  console.log("기본 포트폴리오", defaultPortPolios.data.result);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DefaultPortPolio data={defaultPortPolios.data.result} />
    </Suspense>
  );
}
