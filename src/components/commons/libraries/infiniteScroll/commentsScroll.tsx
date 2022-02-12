import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import Detail from "../../../units/boards/nonmembership/detail/detail.container";

interface IProps {
  pushBoardDetail: string;
}

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export default function CommentScroll(props: IProps) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: props.pushBoardDetail },
  });

  function onLoadMore() {
    console.log(data);
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!Object.keys(prev).length) return;

        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev?.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  }

  return (
    <div style={{ height: "93vh", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={false || true}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
        useWindow={false}
      >
        <Detail datas={data} pushBoardDetail={props.pushBoardDetail} />
      </InfiniteScroll>
    </div>
  );
}
