import * as S from "./BoardDetail.emotions";
import DetailListScroll from "../../../../commons/libraries/infiniteScroll/detailListScroll";
import CommentScroll from "../../../../commons/libraries/infiniteScroll/commentsScroll";
import { MouseEvent } from "react";

interface IProps {
  pushBoardDetail: string;
  RouterPushDetail: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function BoardDetailUi(props: IProps) {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <DetailListScroll RouterPushDetail={props.RouterPushDetail} />
      </S.LeftSide>
      <S.RightSide>
        <CommentScroll pushBoardDetail={props.pushBoardDetail} />
      </S.RightSide>
    </S.Wrapper>
  );
}
