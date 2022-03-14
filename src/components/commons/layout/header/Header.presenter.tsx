import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { IQuery } from "../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../hooks/useFetchUserInfo";
import * as S from "./Header.emotions";
import PaymentModal from "./paymentModal";

interface IProps {
  onClickCreate: () => void;
  onClickLogin: () => void;
  onClickLogout: () => void;
  handleClose: () => void;
  onClickOpenModal: () => void;
  modal: boolean;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export default function LayoutHeaderUI(props: IProps) {
  const { accessToken } = useContext(GlobalContext);
  const { data } = useFetchUserInfo();
  const loggedInfo = data?.fetchUserLoggedIn;

  return (
    <S.Wrapper>
      <PaymentModal modal={props.modal} handleClose={props.handleClose} />
      {accessToken ? (
        <>
          <div id="login" />
          <S.LoginWrapper>
            <S.Profile>
              <img
                src={loggedInfo?.picture || ""}
                onError={(e) => {
                  e.currentTarget.src = "/img/defaultProfile.jpeg";
                }}
              />
            </S.Profile>
            <S.UserName>
              <span>{loggedInfo?.name}</span>
            </S.UserName>
            <S.UserPoint>
              <span>{loggedInfo?.userPoint?.amount}P</span>
            </S.UserPoint>
            <S.ChargeWrapper>
              <button onClick={props.onClickOpenModal}>+충전</button>
            </S.ChargeWrapper>
            <S.Logout>
              <button onClick={props.onClickLogout}>로그아웃</button>
            </S.Logout>
          </S.LoginWrapper>
        </>
      ) : (
        <>
          <div id="blank" />
          <S.LogInfoWrapper>
            <div>
              <button onClick={props.onClickLogin}>로그인</button>
            </div>
            <div>
              <button onClick={props.onClickCreate}>회원가입</button>
            </div>
          </S.LogInfoWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
