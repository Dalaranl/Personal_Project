import { ChangeEvent, MouseEvent } from "react";
// import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";

import BoardDetailListUI from "./BoardDetailList.presenter";

interface IProps {
  RouterPushDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  data: Pick<IQuery, "fetchBoards">;
  keyword: string;
}

export default function BoardDetailList(props: IProps) {
  return (
    <BoardDetailListUI
      keyword={props.keyword}
      data={props.data}
      onChangeSearch={props.onChangeSearch}
      RouterPushDetail={props.RouterPushDetail}
    />
  );
}
