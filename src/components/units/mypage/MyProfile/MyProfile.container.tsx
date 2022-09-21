import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUpdateUserArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../commons/hooks/useFetchUserInfo";
import { UPLOAD_FILE } from "../../used/new/CreateProduct.queries";
import { RESET_USER_PASSWORD, UPDATE_USER } from "../MyPage.queries";
import MyProfileUI from "./MyProfile.presenter";

export default function MyProfile() {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  const [resetUserPassword] =
    useMutation<Pick<IMutation, "resetUserPassword">>(RESET_USER_PASSWORD);

  const { data } = useFetchUserInfo();
  const [name, setName] = useState<string>(data?.fetchUserLoggedIn.name || "");
  const [file, setFile] = useState<File>();
  const [readerImg, setReaderImg] = useState(data?.fetchUserLoggedIn.picture);
  const [passwords, setPasswords] = useState({
    now: "",
    password: "",
    check: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangePassword =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setPasswords({
        ...passwords,
        [name]: e.target.value,
      });
    };

  const onClickProfile = () => {
    inputRef.current?.click();
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    setFile(file);
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      let img = "";
      if (typeof data.target?.result === "string") {
        img = data.target?.result;
      }

      setReaderImg(img);
    };
  };

  const onClickCancel = () => {
    window.location.reload();
  };

  const onClickSubmit = async () => {
    const { now, password, check } = passwords;
    if (now || password || check) {
      if (!now || !password || !check) {
        alert("빈 칸이 존재합니다.");
        return;
      }
      if (now === password) {
        alert("현재 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.");
        return;
      }
      if (password !== check) {
        alert("비밀호가 동일하지 않습니다.");
        return;
      }
    }

    if (!name.length || name.length < 4 || name.length > 10) {
      alert("닉네임은 4~10글자 여야만 합니다.");
      return;
    }

    let picture = "";
    if (file) {
      const result = await uploadFile({
        variables: { file },
      });
      picture = result.data?.uploadFile.url || "";
    }

    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name,
            picture,
          },
        },
      });
      if (password) {
        await resetUserPassword({
          variables: { password },
        });
      }

      alert("수정을 성공하였습니다.");
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        alert("수정에 실패하였습니다.");
      }
    }
  };

  return (
    <MyProfileUI
      onClickCancel={onClickCancel}
      onClickSubmit={onClickSubmit}
      onChangeFile={onChangeFile}
      onClickProfile={onClickProfile}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      inputRef={inputRef}
      name={name}
      readerImg={readerImg}
    />
  );
}
