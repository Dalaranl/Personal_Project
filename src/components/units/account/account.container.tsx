import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import AccountUI from "./account.presenter";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      picture
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function Account() {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    passwordCheck: "",
  });
  const [emailMsg, setEmailMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { email, password, name } = userInfo;

  const modalClose = () => {
    setModal(false);

    if (isSuccess) {
      router.push("/boards/list");
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    if (name === "email") {
      if (value === "") {
        setEmailMsg("");
      } else if (
        !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
          value
        )
      ) {
        setEmailMsg("- 형식이 올바르지 않습니다.");
      } else {
        setEmailMsg("");
      }
    }
    if (name === "name") {
      if (value === "") {
        setNameMsg("");
      } else if (!/^.{4,10}$/.test(value)) {
        setNameMsg("- 4 ~ 10 글자까지 허용됩니다.");
      } else {
        setNameMsg("");
      }
    }
    if (name === "password") {
      if (value === "") {
        setPasswordMsg("");
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&()])[A-Za-z\d$@$!%*#?&()]{8,}$/.test(
          value
        )
      ) {
        setPasswordMsg(
          "- 8글자 이상, 최소 1개이상의 특수문자와 숫자가 포함되어야합니다."
        );
      } else {
        setPasswordMsg("");
      }
    }
    if (name === "passwordCheck") {
      if (value === "") {
        setPasswordCheckMsg("");
      } else if (value !== password) {
        setPasswordCheckMsg("- 비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordCheckMsg("");
      }
    }
  };

  const onClickCreateUser = async () => {
    if (
      emailMsg === "" &&
      nameMsg === "" &&
      passwordMsg === "" &&
      passwordCheckMsg === ""
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });
        setIsSuccess(true);
        setModalMessage("뮤즈대쉬에 오신것을 환영합니다!");
        setModal(true);
        console.log(result);
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      setModalMessage("회원가입 형식을 다시 확인해주세요.");
      setModal(true);
    }
  };

  return (
    <AccountUI
      emailMsg={emailMsg}
      nameMsg={nameMsg}
      passwordMsg={passwordMsg}
      passwordCheckMsg={passwordCheckMsg}
      modal={modal}
      modalMessage={modalMessage}
      modalClose={modalClose}
      onChangeInput={onChangeInput}
      onClickCreateUser={onClickCreateUser}
    />
  );
}
