import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OFTHEBEST,
} from "./BoardList.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>();
  const { data: dataBest } = useQuery(FETCH_BOARDS_OFTHEBEST);
  const { loading, data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, { variables: { search: keyword } });

  if (loading) return "Loding...";

  const getDebounde = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounde(e.target.value);
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToNew = () => {
    router.push("/boards/new");
  };

  return (
    <BoardListUI
      data={data}
      dataBoardsCount={dataBoardsCount}
      dataBest={dataBest}
      keyword={keyword}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveToNew={onClickMoveToNew}
    />
  );
}
