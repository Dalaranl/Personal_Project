import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OFTHEBEST,
} from "./BoardList.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../../commons/types/generated/types";
import _ from "lodash";
import { IPropsBoardList } from "./BoardList.types";

export default function BoardList(props: IPropsBoardList) {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>();
  const { data: dataBest } = useQuery(FETCH_BOARDS_OFTHEBEST);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, { variables: { search: keyword } });

  const getDebounde = _.debounce((value) => {
    props.refetch({ search: value, page: 1 });
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
      data={props.data}
      dataBoardsCount={dataBoardsCount}
      dataBest={dataBest}
      keyword={keyword}
      refetch={props.refetch}
      onChangeSearch={onChangeSearch}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveToNew={onClickMoveToNew}
    />
  );
}
