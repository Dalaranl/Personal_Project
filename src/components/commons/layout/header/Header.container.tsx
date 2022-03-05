import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import { LOGOUT_USER } from "../../../units/login/login.queries";
import { useFetchUserInfo } from "../../hooks/useFetchUserInfo";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  const { data } = useFetchUserInfo();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  // Modal
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  const onClickOpenModal = () => {
    setModal(true);
  };

  // onClick
  const onClickCreate = () => {
    router.push("/account");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickLogout = () => {
    logoutUser();

    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  return (
    <LayoutHeaderUI
      onClickCreate={onClickCreate}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      handleClose={handleClose}
      onClickOpenModal={onClickOpenModal}
      modal={modal}
      data={data}
    />
  );
}
