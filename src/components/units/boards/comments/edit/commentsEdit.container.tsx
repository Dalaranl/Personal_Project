import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { UPDATE_BOARD_COMMENT } from "./comments.queries";
import CommentsEditUI from "./commentsEdit.presenter";
import { IPropsCommentsEdit } from "./commentsEdit.types";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import { useRouter } from "next/router";

export default function CommentsEdit(props: IPropsCommentsEdit) {
  const router = useRouter();
  const [contents, setContents] = useState(props.data.contents);
  const [writerInfo, setWriterInfo] = useState({
    password: "",
    rating: props.data.rating,
  });
  const { password, rating } = writerInfo;
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // textarea 사이즈 조절
  const resize = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    document.getElementById("textArea").style.height = "65.344px";
    document.getElementById("textArea").style.height =
      12 + document.getElementById("textArea").scrollHeight + "px";
  };
  const handleClose = () => setModal((prev) => false);

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    console.log(contents);
  };
  const onChangeWriterInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWriterInfo({
      ...writerInfo,
      [name]: value,
    });
    console.log(password, rating);
  };
  const onClickSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: e.currentTarget.id,
          password,
          updateBoardCommentInput: {
            contents,
            rating: Number(rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.boardid),
            },
          },
        ],
      });
      setModalMessage((prev) => "수정에 성공하였습니다.");
      setModal((prev) => true);
      props.onClickFinishEdit();
    } catch (error: any) {
      setModalMessage((prev) => String(error.message));
      setModal((prev) => true);
    } finally {
      setWriterInfo({
        ...writerInfo,
        password: "",
        rating: 0,
      });
      setContents((prev) => "");
    }
  };

  return (
    <CommentsEditUI
      resize={resize}
      onChangeContents={onChangeContents}
      onChangeWriterInfo={onChangeWriterInfo}
      onClickSubmit={onClickSubmit}
      contents={contents}
      writerInfo={writerInfo}
      data={props.data}
      modal={modal}
      modalMessage={modalMessage}
      handleClose={handleClose}
    />
  );
}
