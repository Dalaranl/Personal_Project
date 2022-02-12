import DetailUI from "./detail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./detail.queries";
import { useRouter } from "next/router";

interface IProps {
  pushBoardDetail: string;
  datas: Pick<IQuery, "fetchBoardComments">;
}

const STORAGE = "https://storage.googleapis.com/";

export default function Detail(props: IProps) {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: props.pushBoardDetail,
        // ? props.pushBoardDetail
        // : String(router.query.boardid),
      },
    }
  );
  const [number, setNumber] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  useEffect(() => {
    setImgUrl((prev) => STORAGE + data?.fetchBoard.images[number]);
  }, [number]);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [disLikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const [isYoutube, setIsYoutube] = useState(false);

  const onClickOpen = () => {
    setIsYoutube(true);
  };
  const modalClose = () => {
    setModal(false);
    router.push("/boards/list");
  };
  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: props.pushBoardDetail },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: props.pushBoardDetail },
        },
      ],
    });
  };
  const onClickDisLike = async () => {
    await disLikeBoard({
      variables: { boardId: props.pushBoardDetail },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: props.pushBoardDetail },
        },
      ],
    });
  };
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: props.pushBoardDetail },
      });
      setModalMessage((prev) => "게시글이 삭제되었습니다.");
    } catch {
      setModalMessage((prev) => "게시글 삭제에 실패하였습니다.");
    }
    setModal((prev) => true);
  };
  const onClickPrev = () => {
    if (number === 0) {
      setNumber((prev) => data?.fetchBoard.images.length);
    } else {
      setNumber((prev) => prev - 1);
    }
  };
  const onClickNext = () => {
    if (number === data?.fetchBoard.images.length) {
      setNumber((prev) => 0);
    } else {
      setNumber((prev) => prev + 1);
    }
  };

  const onClickEdit = () => {
    router.push(`/boards/${props.pushBoardDetail}/edit`);
  };
  const onClickNew = () => {
    router.push("/boards/new");
  };

  return (
    <DetailUI
      data={data}
      isYoutube={isYoutube}
      pushBoardDetail={props.pushBoardDetail}
      imgUrl={imgUrl}
      onClickOpen={onClickOpen}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickEdit={onClickEdit}
      onClickNew={onClickNew}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickDelete={onClickDelete}
      modalClose={modalClose}
      datas={props.datas}
      number={number}
      modal={modal}
      modalMessage={modalMessage}
    />
  );
}
