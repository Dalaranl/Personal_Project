import { ChangeEvent } from "react";
import * as S from "./account.emotions";
import AccountModal from "./accountModal";

interface IProps {
  emailMsg: string;
  nameMsg: string;
  passwordMsg: string;
  passwordCheckMsg: string;
  modal: boolean;
  modalMessage: string;
  modalClose: () => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateUser: () => void;
}

export default function AccountUI(props: IProps) {
  return (
    <S.Wrapper>
      <AccountModal
        modal={props.modal}
        modalMessage={props.modalMessage}
        modalClose={props.modalClose}
      />
      <S.WrapperDark>
        <S.CreateAccountWrapper>
          <S.Header>
            <span>계정 만들기</span>
          </S.Header>
          <S.InputWrapper>
            <div id="Header">
              <S.ErrorInfo>
                이메일 <span>{props.emailMsg}</span>
              </S.ErrorInfo>
            </div>
            <div id="Body">
              <input type="text" name="email" onChange={props.onChangeInput} />
            </div>
          </S.InputWrapper>
          <S.InputWrapper>
            <div id="Header">
              <S.ErrorInfo>
                유저이름 <span>{props.nameMsg}</span>
              </S.ErrorInfo>
            </div>
            <div id="Body">
              <input type="text" name="name" onChange={props.onChangeInput} />
            </div>
          </S.InputWrapper>
          <S.InputWrapper>
            <div id="Header">
              <S.ErrorInfo>
                비밀번호 <span>{props.passwordMsg}</span>
              </S.ErrorInfo>
            </div>
            <div id="Body">
              <input
                type="password"
                name="password"
                onChange={props.onChangeInput}
              />
            </div>
          </S.InputWrapper>
          <S.InputWrapper>
            <div id="Header">
              <S.ErrorInfo>
                비밀번호 확인 <span>{props.passwordCheckMsg}</span>
              </S.ErrorInfo>
            </div>
            <div id="Body">
              <input
                type="password"
                name="passwordCheck"
                onChange={props.onChangeInput}
              />
            </div>
          </S.InputWrapper>
          <S.Bottom>
            <S.Submit onClick={props.onClickCreateUser}>회원가입</S.Submit>
          </S.Bottom>
        </S.CreateAccountWrapper>
      </S.WrapperDark>
    </S.Wrapper>
  );
}
