import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";
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
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(props.data.rating || 0);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // textarea 사이즈 조절
  const resize = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = document.getElementById("textArea");
    if (!textarea) return;

    textarea.style.height = "65.344px";
    textarea.style.height = 12 + textarea.scrollHeight + "px";
  };
  const handleClose = () => setModal((prev) => false);

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeRating = (
    e: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRating(value || 0);
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
      setContents("");
      setPassword("");
      setRating(0);
      setModalMessage((prev) => "수정에 성공하였습니다.");
      setModal((prev) => true);
      props.onClickFinishEdit();
    } catch (error: any) {
      setModalMessage((prev) => String(error.message));
      setModal((prev) => true);
    }
  };

  return (
    <CommentsEditUI
      resize={resize}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onClickSubmit={onClickSubmit}
      password={password}
      rating={rating}
      contents={contents}
      data={props.data}
      modal={modal}
      modalMessage={modalMessage}
      handleClose={handleClose}
    />
  );
}
