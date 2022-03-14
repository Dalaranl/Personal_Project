import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsBoardList {
  data?: Pick<IQuery, "fetchBoards"> | undefined;
  refetch: any;
}

export interface IPropsBoardListUI {
  data?: Pick<IQuery, "fetchBoards">;
  dataBest: any;
  refetch: any;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  keyword: string | undefined;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToNew: () => void;
}
