import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import LoginUI from "./login.presenter";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const refCheck = useRef<HTMLButtonElement>(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    setModal(false);

    if (isSuccess) {
      setIsSuccess(false);
      router.push("/boards/list");
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      });

      console.log(result);

      setModalMessage("뮤즈대쉬에 오신것을 환영합니다!");
      setModal(true);
      setIsSuccess(true);
    } catch (error: any) {
      setModalMessage(error.message);
      setModal(true);
    }
  };

  const onClickCheckBox = () => {
    refCheck.current?.click();
  };

  const onClickCreate = () => {
    router.push("/account");
  };

  return (
    <LoginUI
      refCheck={refCheck}
      modal={modal}
      modalMessage={modalMessage}
      handleClose={handleClose}
      onClickCheckBox={onClickCheckBox}
      onClickCreate={onClickCreate}
      onChangeInput={onChangeInput}
      onClickLogin={onClickLogin}
    />
  );
}
