import UsedUI from "./Used.presenter";
import InfiniteScroll from "react-infinite-scroller";
import { IPropsUsed } from "./Used.types";
import { useContext } from "react";
import { UsedListContext } from "../../../../../pages/used/list";
import { FETCH_USEDITEMS_OFTHEBEST } from "./used.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export default function Used(props: IPropsUsed) {
  const { isSold, isUnsold } = useContext(UsedListContext);
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USEDITEMS_OFTHEBEST
  );
  return (
    <div style={{ height: "93vh", overflow: "auto" }}>
      {isUnsold && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={false || true}
          // loader={
          //   <div className="loader" key={0}>
          //     Loading ...
          //   </div>
          // }
          useWindow={false}
        >
          <UsedUI data={data} />
        </InfiniteScroll>
      )}
      {isSold && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMoreSoldout}
          hasMore={false || true}
          // loader={
          //   <div className="loader" key={0}>
          //     Loading ...
          //   </div>
          // }
          useWindow={false}
        >
          <UsedUI data={data} />
        </InfiniteScroll>
      )}
    </div>
  );
}
