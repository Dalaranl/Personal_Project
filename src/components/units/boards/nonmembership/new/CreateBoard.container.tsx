import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../../commons/types/generated/types";
import CreateBoardUI from "./CreateBoard.presenter";
import { CREAT_BOARD, UPDATE_BOARD } from "./CreateBoard.queries";
import { IPropsCreateBoard } from "./CreateBoard.types";

export default function CreateBoard(props: IPropsCreateBoard) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREAT_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [userInfo, setUserInfo] = useState({
    writer: "",
    password: "",
    title: "",
    youtubeUrl: "",
    images: [],
  });
  const [contents, setContents] = useState("");
  const { writer, password, title, youtubeUrl } = userInfo;
  const [modal, setModal] = useState(false);
  const [adDress, setAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });
  const { zipcode, address, addressDetail } = adDress;

  // Modal
  const [modalMessage, setModalMessage] = useState("");
  const [isDaumPost, setIsDaumPost] = useState(false);
  const handleOpen = () => setModal((prev) => true);
  const handleClose = () => setModal((prev) => false);
  const SetIsDaumPost = () => setIsDaumPost((prev) => !prev);

  // Wrapper reseizing
  const [wrapperSize, setWrapperSize] = useState(15);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [isReset, setIsReset] = useState(false);
  useEffect(() => {
    document.getElementById("movePage").style.left = `${wrapperSize}vw`;
  }, [isNext]);
  useEffect(() => {
    document.getElementById("movePage").style.left = `${wrapperSize}vw`;
  }, [isPrev]);
  useEffect(() => {
    document.getElementById("movePage").style.left = `${wrapperSize}vw`;
  }, [isReset]);

  const onClickNextPage = () => {
    props.isEdit &&
      setUserInfo({
        ...userInfo,
        writer: props.data?.fetchBoard.writer,
        title: props.data?.fetchBoard.title,
        youtubeUrl: props.data?.fetchBoard.youtubeUrl,
      });
    props.isEdit &&
      setAddress({
        ...adDress,
        zipcode: props.data?.fetchBoard.boardAddress.zipcode,
        address: props.data?.fetchBoard.boardAddress.address,
        addressDetail: props.data?.fetchBoard.boardAddress.addressDetail,
      });
    props.isEdit && setContents((prev) => props.data?.fetchBoard.contents);

    if (writer && password && wrapperSize === 15) {
      setWrapperSize((prev) => prev - 100);
      setIsNext((prev) => !prev);
    } else if (writer && password && title && contents && wrapperSize === -85) {
      setWrapperSize((prev) => prev - 100);
      setIsNext((prev) => !prev);
    } else if (
      writer &&
      password &&
      title &&
      contents &&
      zipcode &&
      address &&
      addressDetail
    ) {
      setWrapperSize((prev) => prev - 100);
      setIsNext((prev) => !prev);
    } else {
      setModalMessage((prev) => "필수 입력사항 입니다.");
      handleOpen();
    }
  };

  const onClickPrevPage = () => {
    if (wrapperSize === 15) return;

    setWrapperSize((prev) => prev + 100);
    setIsPrev((prev) => !prev);
  };

  const onClickReset = () => {
    setUserInfo({
      ...userInfo,
      writer: "",
      password: "",
      title: "",
      youtubeUrl: "",
      images: [],
    });
    setAddress({
      ...adDress,
      zipcode: "",
      address: "",
      addressDetail: "",
    });
    setContents((prev) => "");
    console.log(userInfo);
    setWrapperSize((prev) => 15);
    setIsReset((prev) => !prev);
  };

  // Event
  const onChangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents((prev) => e.target.value);
    console.log(contents);
  };
  const onChangeAddress = (address: string, zonecode: string) => {
    setAddress({
      ...adDress,
      zipcode: zonecode,
      address: address,
    });
  };
  const onChangeDetailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({
      ...adDress,
      [name]: value,
    });
  };

  // query
  const onClickCreateBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push(`/boards/${result.data?.createBoard?._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onClickUpdateBoard = async () => {
    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardid),
          password,
          updateBoardInput: {
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push(`/boards/${router.query.boardid}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <CreateBoardUI
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      onChangeUserInfo={onChangeUserInfo}
      onChangeContents={onChangeContents}
      onClickCreateBoard={onClickCreateBoard}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onChangeAddress={onChangeAddress}
      SetIsDaumPost={SetIsDaumPost}
      onChangeDetailAddress={onChangeDetailAddress}
      onClickReset={onClickReset}
      onClickUpdateBoard={onClickUpdateBoard}
      modal={modal}
      isDaumPost={isDaumPost}
      userInfo={userInfo}
      contents={contents}
      modalMessage={modalMessage}
      adDress={adDress}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
