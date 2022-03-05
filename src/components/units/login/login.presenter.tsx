import * as S from "./login.emotions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import RouterModal from "./routerModal";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface IProps {
  refCheck: RefObject<HTMLButtonElement>;
  modal: boolean;
  modalMessage: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  onClickCheckBox: () => void;
  onClickCreate: () => void;
  onClickLogin: () => void;
}

export default function LoginUI(props: IProps) {
  const onKeyPressLogin = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onClickLogin();
    }
  };

  return (
    <S.Wrapper>
      <RouterModal
        modal={props.modal}
        modalMessage={props.modalMessage}
        handleClose={props.handleClose}
      />
      <S.LoginWrapper>
        <S.Header>
          <span>돌아오신 것을 환영합니다!</span>
        </S.Header>
        <S.InputWrapper>
          <div className="Header">
            <S.ErrorInfo>
              이메일 <span>이메일을 잊으셨나요?</span>
            </S.ErrorInfo>
          </div>
          <div className="Body">
            <input type="text" name="email" onChange={props.onChangeInput} />
          </div>
        </S.InputWrapper>
        <S.InputWrapper>
          <div className="Header">
            <S.ErrorInfo>
              비밀번호 <span>비밀번호를 잊으셨나요?</span>
            </S.ErrorInfo>
          </div>
          <div className="Body">
            <input
              type="password"
              name="password"
              onKeyPress={onKeyPressLogin}
              onChange={props.onChangeInput}
            />
          </div>
        </S.InputWrapper>
        <S.CheckboxWrapper>
          <div id="loged">
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              style={{ color: "#fe1881" }}
              ref={props.refCheck}
            />
            <span onClick={props.onClickCheckBox}>로그인 유지하기</span>
          </div>
          <div id="new">
            <span onClick={props.onClickCreate}>회원가입</span>
          </div>
        </S.CheckboxWrapper>
        <S.SubmitWrapper>
          <button onClick={props.onClickLogin}>로그인</button>
        </S.SubmitWrapper>
        <S.SocialWrapper>
          <S.SocailHeader>
            <span>Social 로그인</span>
          </S.SocailHeader>
        </S.SocialWrapper>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
