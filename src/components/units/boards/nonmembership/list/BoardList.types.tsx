import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsBoardList {
  data?: Pick<IQuery, "fetchBoards">;
  refetch: any;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  keyword: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToNew: () => void;
}
