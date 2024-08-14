import { getDetailPortPolio } from "@/api/portpolio";
import { getUserInfoByUserObjectId } from "@/api/user";
import BoardDetailContents from "@/components/contents/BoardDetailContents";

async function getPortPolioData(portpolioId: string) {
  const portpolioData = await getDetailPortPolio(portpolioId);
  return portpolioData.data;
}

async function getUserData(usersId: string) {
  const userData = await getUserInfoByUserObjectId(usersId);
  return userData.data;
}

async function BoardDetailPage({ params }: { params: { id: string } }) {
  const portpolioId = params.id;
  const portpolioData = await getPortPolioData(portpolioId);
  const userId = portpolioData.result.users_table_id;
  const userData = await getUserData(userId);

  return (
    <BoardDetailContents
      userData={userData.userInfo}
      portpolioData={portpolioData.result}
    />
  );
}

export default BoardDetailPage;
