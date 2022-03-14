import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailList from "../../../units/boards/nonmembership/detailList/BoardDetailList.container";
import { FETCH_BOARDS } from "../../../units/boards/nonmembership/list/BoardList.queries";
import _ from "lodash";

interface IProps {
  RouterPushDetail: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function DetailListScroll(props: IProps) {
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const [keyword, setKeyword] = useState<string>("");

  const getDebounce = _.debounce((el) => {
    refetch({ search: el, page: 1 });
    setKeyword(el);
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div
      style={{
        height: "94vh",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
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
        <BoardDetailList
          RouterPushDetail={props.RouterPushDetail}
          onChangeSearch={onChangeSearch}
          data={data}
          keyword={keyword}
        />
      </InfiniteScroll>
    </div>
  );
}
