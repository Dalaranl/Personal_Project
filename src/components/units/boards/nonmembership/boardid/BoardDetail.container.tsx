import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";
import BoardDetailUi from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardid) },
    }
  );
  const [isYoutube, setIsYoutube] = useState(false);

  const onClickOpen = () => {
    setIsYoutube(true);
  };

  return (
    <BoardDetailUi
      data={data}
      onClickOpen={onClickOpen}
      isYoutube={isYoutube}
    />
  );
}
