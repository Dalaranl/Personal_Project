import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import BoardDetailUi from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [pushBoardDetail, setPushBoardDetail] = useState(
    String(router.query.boardid)
  );
  console.log(pushBoardDetail);
  const RouterPushDetail = (e: MouseEvent<HTMLDivElement>) => {
    setPushBoardDetail((prev) => e.currentTarget.id);
    history.pushState("", null, e.currentTarget.id);
  };

  return (
    <BoardDetailUi
      pushBoardDetail={pushBoardDetail}
      RouterPushDetail={RouterPushDetail}
    />
  );
}
