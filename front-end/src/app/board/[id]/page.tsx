import BoardDetailContents from "@/components/contents/BoardDetailContents";

function BoardDetailPage({ params }: { params: { id: string } }) {
  return <BoardDetailContents portpolioId={params.id} />;
}

export default BoardDetailPage;
