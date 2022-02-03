import DetailUI from "./detail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./detail.queries";
import { useRouter } from "next/router";

interface IProps {
  pushBoardDetail: string;
  datas: Pick<IQuery, "fetchBoardComments">;
}

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
      onClickOpen={onClickOpen}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickEdit={onClickEdit}
      onClickNew={onClickNew}
      datas={props.datas}
    />
  );
}
