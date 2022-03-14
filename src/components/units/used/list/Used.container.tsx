import UsedUI from "./Used.presenter";
import InfiniteScroll from "react-infinite-scroller";
import { IPropsUsed } from "./Used.types";
import { FETCH_USEDITEMS_OFTHEBEST } from "./used.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { UsedListContext } from "../../../../../pages/used/list";
import { useContext, useState } from "react";
import { getMyDate } from "../../../../commons/libraries/getData";

export default function Used(props: IPropsUsed) {
  const { setIsSold, setIsDateSearchMore } = useContext(UsedListContext);
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USEDITEMS_OFTHEBEST
  );

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [isDate, setIsDate] = useState(false);

  function onChangeGetDate(dates: any) {
    if (!dates) {
      setIsDate(false);
      setIsDateSearchMore && setIsDateSearchMore(true);
      return;
    }

    setIsDate(true);
    setStart(Number(getMyDate(dates[0]).split(".").join("")));
    setEnd(Number(getMyDate(dates[1]).split(".").join("")));
  }

  const onClickIsSold = () => {
    if (!setIsSold) return;
    setIsSold((prev) => !prev);
  };

  return (
    <div style={{ height: "93vh", overflow: "auto" }}>
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
        <UsedUI
          data={data}
          start={start}
          end={end}
          isDate={isDate}
          onChangeGetDate={onChangeGetDate}
          onClickIsSold={onClickIsSold}
        />
      </InfiniteScroll>
    </div>
  );
}
