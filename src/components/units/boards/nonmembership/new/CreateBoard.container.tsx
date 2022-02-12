import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { checkFileValidation } from "../../../../../commons/libraries/checkFileValidation";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../../commons/types/generated/types";
import CreateBoardUI from "./CreateBoard.presenter";
import { CREAT_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./CreateBoard.queries";
import { IPropsCreateBoard } from "./CreateBoard.types";

const STORAGE = "https://storage.googleapis.com/";

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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [userInfo, setUserInfo] = useState({
    writer: "",
    password: "",
    title: "",
    youtubeUrl: "",
  });
  const [images, setImages] = useState<string[]>([]);
  const [editImages, setEditImages] = useState<string[]>([]);
  useEffect(() => {
    if (props.data) {
      setEditImages([...editImages, ...props.data?.fetchBoard.images]);
    }
  }, []);

  const [contents, setContents] = useState("");
  const { writer, password, title, youtubeUrl } = userInfo;
  const [modal, setModal] = useState(false);
  const [adDress, setAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });
  const { zipcode, address, addressDetail } = adDress;
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");

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
    if (props.isEdit) {
      setWrapperSize((prev) => prev - 100);
      setIsNext((prev) => !prev);
      return;
    }

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
    });
    setImages((prev) => []);
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
  const onClickImg = () => {
    fileRef.current?.click();
  };

  const onClickEditImg = (e: MouseEvent<HTMLImageElement>) => {
    setEditImages(editImages.filter((el) => el !== e.currentTarget.id));
    fileRef.current?.click();
  };

  const onChangeUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const isValid = checkFileValidation(images, file);

    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      if (props.isEdit) {
        setEditImages((prev) => [...prev, result.data?.uploadFile.url]);
        return;
      }

      setImgUrl(STORAGE + result.data?.uploadFile.url);
      setImages((prev) => [...prev, String(result.data?.uploadFile.url)]);
    } catch (error: any) {
      setModalMessage((prev) => "사진 등록에 실패하였습니다.");
      handleOpen();
    }
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
            images,
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
    const updateBoardInput: any = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (editImages) updateBoardInput.images = editImages;

    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardid),
          password,
          updateBoardInput,
        },
      });
      router.push(`/boards/${router.query.boardid}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <CreateBoardUI
      onClickEditImg={onClickEditImg}
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
      onClickImg={onClickImg}
      onChangeUpload={onChangeUpload}
      modal={modal}
      isDaumPost={isDaumPost}
      userInfo={userInfo}
      contents={contents}
      modalMessage={modalMessage}
      adDress={adDress}
      isEdit={props.isEdit}
      data={props.data}
      fileRef={fileRef}
      imgUrl={imgUrl}
      images={images}
      editImages={editImages}
    />
  );
}
