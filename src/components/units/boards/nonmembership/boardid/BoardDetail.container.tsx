import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import BoardDetailUi from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [pushBoardDetail, setPushBoardDetail] = useState(
    String(router.query.boardid)
  );

  const RouterPushDetail = (e: MouseEvent<HTMLDivElement>) => {
    setPushBoardDetail((prev) => e.currentTarget.id);
    history.pushState("", e.currentTarget.id);
  };

  return (
    <BoardDetailUi
      pushBoardDetail={pushBoardDetail}
      RouterPushDetail={RouterPushDetail}
    />
  );
}
