import { useQuery } from "@apollo/client";
import { MouseEvent } from "react";
// import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../list/BoardList.queries";
import BoardDetailListUI from "./BoardDetailList.presenter";

interface IProps {
  RouterPushDetail: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function BoardDetailList(props: IProps) {
  //   const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: { page: 1 },
    }
  );

  return (
    <BoardDetailListUI data={data} RouterPushDetail={props.RouterPushDetail} />
  );
}
