import { useMutation } from "@apollo/client";

import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  // IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";

interface IProps {
  pushBoardDetail: string;
  datas: Pick<IQuery, "fetchBoardComments"> | undefined;
}

export default function CommentList(props: IProps) {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchBoardComments">,
  //   IQueryFetchBoardCommentsArgs
  // >(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: props.pushBoardDetail, page: 1 },
  // });
  const [commentsId, setCommentsId] = useState("");
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [modal, setModal] = useState(false);
  const [passModal, setPassModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isEditId, setIsEditId] = useState("");

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: String(commentsId),
          password,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: props.pushBoardDetail, page: 1 },
          },
        ],
      });
      setModalMessage("게시글 삭제에 성공하였습니다.");
      setModal(true);
    } catch (error: any) {
      setModalMessage(error.message);
      setModal(true);
    }
  };
  const handleOpen = () => setModal((prev) => true);
  const handleClose = () => setModal((prev) => false);
  const passModalClose = () => {
    setPassModal((prev) => false);
    onClickDelete();
  };
  const passModalOpen = (e: MouseEvent<SVGSVGElement>) => {
    if (isEditId) {
      setModalMessage((prev) => "수정중인 게시글이 있습니다.");
      setModal((prev) => true);
    } else {
      setCommentsId(e.currentTarget.id);
      setPassModal((prev) => true);
    }
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClickEdit = (e: MouseEvent<SVGSVGElement>) => {
    setIsEditId(e.currentTarget.id);
  };
  const onClickFinishEdit = () => {
    setIsEditId((prev) => "");
  };

  return (
    <CommentListUI
      datas={props.datas}
      modal={modal}
      passModal={passModal}
      modalMessage={modalMessage}
      commentsId={commentsId}
      isEditId={isEditId}
      handleClose={handleClose}
      handleOpen={handleOpen}
      onChangePassword={onChangePassword}
      passModalClose={passModalClose}
      passModalOpen={passModalOpen}
      onClickEdit={onClickEdit}
      onClickFinishEdit={onClickFinishEdit}
    />
  );
}
