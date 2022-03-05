import * as S from "../MyProduct/MyProduct.emotion";
import { IPropsMyPointUI } from "../MyPage.types";
import Buying from "./Buying";
import Whole from "./whole";
import Charge from "./charge";
import Selling from "./selling";

export function MyPointUI(props: IPropsMyPointUI) {
  return (
    <S.Wrapper>
      <S.MainNav>
        <S.All onClick={props.onClickIsWhole}>
          <span>전체내역</span>
        </S.All>
        <S.Charge onClick={props.onClickIsCharge}>
          <span>충전내역</span>
        </S.Charge>
        <S.Buying onClick={props.onClickIsBuying}>
          <span>구매내역</span>
        </S.Buying>
        <S.Selling onClick={props.onClickIsSelling}>
          <span>판매내역</span>
        </S.Selling>
        <S.Search></S.Search>
      </S.MainNav>
      {props.isWhole && <Whole />}
      {props.isCharge && <Charge />}
      {props.isBuying && <Buying />}
      {props.isSelling && <Selling />}
    </S.Wrapper>
  );
}
