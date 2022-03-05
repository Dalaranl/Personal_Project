import * as S from "./navigation.emotion";

interface IProps {
  onClickMoveToFreeboard: () => void;
  onClickMoveToHome: () => void;
  onClickMoveToGiphy: () => void;
  onClickMoveToGiphyHistory: () => void;
  onClickMoveToUsed: () => void;
  onClickMoveToMyProfile: () => void;
}

export default function LayoutNavigationUI(props: IProps) {
  return (
    <S.Wrapper>
      <div className="navWrapper">
        <S.HomeButton className="home" onClick={props.onClickMoveToHome}>
          <S.HomeIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </S.HomeIcon>
          <span>홈</span>
        </S.HomeButton>
      </div>
      <div className="navWrapper">
        <S.MyPageButton
          className="myPage"
          onClick={props.onClickMoveToMyProfile}
        >
          <S.MypageIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </S.MypageIcon>
          <span>마이페이지</span>
        </S.MyPageButton>
      </div>
      <div className="navWrapper">
        <S.FreeBoardButton
          className="myFreeBoard"
          onClick={props.onClickMoveToFreeboard}
        >
          <S.FreeBoardIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-left-dots"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </S.FreeBoardIcon>
          <span>자유게시판</span>
        </S.FreeBoardButton>
      </div>
      <div className="navWrapper">
        <S.MarketButton className="myMarket" onClick={props.onClickMoveToUsed}>
          <S.MarketIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </S.MarketIcon>
          <span>중고마켓</span>
        </S.MarketButton>
      </div>
      <div className="navWrapper">
        <S.GiphyButton className="myMarket" onClick={props.onClickMoveToGiphy}>
          <S.GiphyIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
          </S.GiphyIcon>
          <span>GIPHY</span>
        </S.GiphyButton>
      </div>
      <div className="navWrapper">
        <S.GiphyHistoryButton
          className="myMarket"
          onClick={props.onClickMoveToGiphyHistory}
        >
          <S.GiphyHistoryIcon
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
          </S.GiphyHistoryIcon>
          <span>GIPHY-History</span>
        </S.GiphyHistoryButton>
      </div>
      <S.DivideLine />
    </S.Wrapper>
  );
}
