import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
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
    rating: 0,
  });
  const { writer, password, rating } = writerInfo;
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATEBOARD_COMMENT);

  // textarea 사이즈 조절
  const resize = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    document.getElementById("textArea").style.height = "65.344px";
    document.getElementById("textArea").style.height =
      12 + document.getElementById("textArea").scrollHeight + "px";
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
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
      console.log(contents);
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
    } catch (error: any) {
      alert(error.message);
    } finally {
      setContents((prev) => "");
      setWriterInfo({
        ...writerInfo,
        writer: "",
        password: "",
        rating: 0,
      });
    }
  };

  return (
    <CommentsWriteUI
      resize={resize}
      onChangeContents={onChangeContents}
      onChangeWriterInfo={onChangeWriterInfo}
      onClickSubmit={onClickSubmit}
      contents={contents}
      writerInfo={writerInfo}
    />
  );
}
