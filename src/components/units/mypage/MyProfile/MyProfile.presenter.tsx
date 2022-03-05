import FullSizeButton from "../../../commons/buttons/fullSize";
import { useFetchUserInfo } from "../../../commons/hooks/useFetchUserInfo";
import { IPropsMyProfileUI } from "../MyPage.types";
import * as S from "./MyProfile.emotions";

const STORAGE = "https://storage.googleapis.com/";

export default function MyProfileUI(props: IPropsMyProfileUI) {
  const { data } = useFetchUserInfo();
  return (
    <S.Wrapper>
      <S.EditUserInfo>
        <S.UserInfoTitle>
          <span>회원정보 수정</span>
        </S.UserInfoTitle>
        <S.UserInfo>
          <S.Profile onClick={props.onClickProfile}>
            <input
              type="file"
              ref={props.inputRef}
              onChange={props.onChangeFile}
            />
            {props.readerImg?.includes("codecamp") ? (
              <img
                src={STORAGE + props.readerImg}
                onError={(e) => {
                  e.currentTarget.src = "/img/defaultProfile.jpeg";
                }}
              />
            ) : (
              <img
                src={props.readerImg || ""}
                onError={(e) => {
                  e.currentTarget.src = "/img/defaultProfile.jpeg";
                }}
              />
            )}
            <div>
              <span>Edit</span>
            </div>
          </S.Profile>
          <S.Info>
            <S.Title>
              <span>이메일</span>
            </S.Title>
            <S.UserInfoInput
              defaultValue={data?.fetchUserLoggedIn.email}
              disabled
            />
            <S.Title>
              <span>닉네임</span>
            </S.Title>
            <S.UserInfoInput
              defaultValue={props.name}
              onChange={props.onChangeName}
            />
          </S.Info>
        </S.UserInfo>
      </S.EditUserInfo>
      <S.EditPassword>
        <S.UserInfoTitle>
          <span>비밀변호 변경</span>
        </S.UserInfoTitle>
        <S.PasswordWrapper>
          <S.Password>
            <div>
              <span>현재 비밀번호</span>
            </div>
            <input onChange={props.onChangePassword("now")} type="password" />
          </S.Password>
          <S.Password>
            <div>
              <span>새 비밀번호</span>
            </div>
            <input
              onChange={props.onChangePassword("password")}
              type="password"
            />
          </S.Password>
          <S.Password>
            <div>
              <span>새 비밀번호 확인</span>
            </div>
            <input onChange={props.onChangePassword("check")} type="password" />
          </S.Password>
        </S.PasswordWrapper>
      </S.EditPassword>
      <S.SubmitWrapper>
        <div>
          <FullSizeButton name="취소하기" onClick={props.onClickCancel} />
        </div>
        <div>
          <FullSizeButton name="등록하기" onClick={props.onClickSubmit} />
        </div>
      </S.SubmitWrapper>
    </S.Wrapper>
  );
}
