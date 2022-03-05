import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { MyPageContext } from "./MyPage.container";
import * as S from "./MyPage.emotions";
import { IPropsMyPageUI } from "./MyPage.types";
import { MyPoint } from "./MyPoint/MyPoint.container";
import { MyProduct } from "./MyProduct/MyProduct.container";
import MyProfile from "./MyProfile/MyProfile.container";

export default function MyPageUI(props: IPropsMyPageUI) {
  const { accessToken } = useContext(GlobalContext);
  const { isMyPoint, isMyProfile, isMyProduct } = useContext(MyPageContext);
  return (
    <>
      {accessToken ? (
        <S.Wrapper>
          <S.Header>
            <S.MyPage>
              <S.Title>
                <span>My Page</span>
              </S.Title>
              <S.UserInfo>
                <S.UserProfile>
                  <img src="/img/defaultProfile.jpeg" />
                </S.UserProfile>
                <S.UserStatus>
                  <S.UserName>
                    <span>{`[ Dalaran ]`}</span>
                  </S.UserName>
                  <S.UserPoint>
                    <span>P. 11111</span>
                  </S.UserPoint>
                </S.UserStatus>
                <S.UserProduct>
                  <S.SoldCount>
                    <S.SoldName>
                      <span>판매중</span>
                    </S.SoldName>
                    <S.Sold>
                      <span>10개</span>
                    </S.Sold>
                  </S.SoldCount>
                  <S.BuyingCount>
                    <S.BuyingName>
                      <span>구매 갯수</span>
                    </S.BuyingName>
                    <S.Buying>
                      <span>15개</span>
                    </S.Buying>
                  </S.BuyingCount>
                </S.UserProduct>
              </S.UserInfo>
            </S.MyPage>
          </S.Header>
          <S.BtnWrppaer>
            <S.BTN>
              <S.Navigation>
                <S.MyProductBtn
                  isMyProduct={isMyProduct}
                  onClick={props.onClickIsMyProduct}
                >
                  장터
                </S.MyProductBtn>
                <S.MyPointBtn
                  isMyPoint={isMyPoint}
                  onClick={props.onClickIsMyPoint}
                >
                  포인트
                </S.MyPointBtn>
                <S.MyProfileBtn
                  isMyProfile={isMyProfile}
                  onClick={props.onClickIsMyProfile}
                >
                  회원정보 수정
                </S.MyProfileBtn>
              </S.Navigation>
            </S.BTN>
          </S.BtnWrppaer>
          <S.Body>
            <S.MyPage>
              {isMyProduct && (
                <S.Main>
                  <MyProduct />
                </S.Main>
              )}
              {isMyPoint && (
                <S.Main>
                  <MyPoint />
                </S.Main>
              )}
              {isMyProfile && (
                <S.Main>
                  <MyProfile />
                </S.Main>
              )}
            </S.MyPage>
          </S.Body>
        </S.Wrapper>
      ) : (
        <S.Wrapper></S.Wrapper>
      )}
    </>
  );
}
