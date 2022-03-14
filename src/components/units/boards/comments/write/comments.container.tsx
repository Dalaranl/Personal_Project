import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, SyntheticEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import CommentsWriteUI from "./comments.presenter";
import { CREATEBOARD_COMMENT } from "./comments.queries";
// import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";

interface IProps {
  pushBoardDetail: string;
}

export default function CommentsWrite(props: IProps) {
  const [contents, setContents] = useState("");
  const [writerInfo, setWriterInfo] = useState({
    writer: "",
    password: "",
  });
  const [rating, setRating] = useState(0);
  const { writer, password } = writerInfo;
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATEBOARD_COMMENT);

  // textarea 사이즈 조절
  const resize = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = document.getElementById("textArea");
    if (!textarea) return;
    textarea.style.height = "65.344px";
    textarea.style.height = 12 + textarea.scrollHeight + "px";
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };
  const onChangeRating = (
    e: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRating(value || 0);
  };
  const onChangeWriterInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWriterInfo({
      ...writerInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: props.pushBoardDetail,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: Number(rating),
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: props.pushBoardDetail, page: 1 },
          },
        ],
      });
      setContents((prev) => "");
      setWriterInfo({
        ...writerInfo,
        writer: "",
        password: "",
      });
      setRating(0);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <CommentsWriteUI
      resize={resize}
      onChangeContents={onChangeContents}
      onChangeWriterInfo={onChangeWriterInfo}
      onChangeRating={onChangeRating}
      onClickSubmit={onClickSubmit}
      contents={contents}
      writerInfo={writerInfo}
      rating={rating}
    />
  );
}
