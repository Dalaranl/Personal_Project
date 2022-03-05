import { useQuery } from "@apollo/client";
import { createContext, KeyboardEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";
import Used from "../../../src/components/units/used/list/Used.container";
import { FETCH_USED_ITEMS } from "../../../src/components/units/used/list/used.queries";
import { IUsedListContext } from "../../../src/components/units/used/list/Used.types";

export const UsedListContext = createContext<IUsedListContext>({});

const UsedPage = () => {
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false, page: 1, search: "" },
  });
  const {
    data: dataSoldout,
    fetchMore: fetchMoreSoldout,
    refetch: refetchSoldout,
  } = useQuery(FETCH_USED_ITEMS, {
    variables: { isSoldout: true, page: 1, search: "" },
  });

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isUnsold, setIsUnsold] = useState(true);
  const [isSold, setIsSold] = useState(false);

  const onPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (isUnsold) refetch({ isSoldout: false, search, page: 1 });
      if (isSold) refetchSoldout({ isSoldout: true, search, page: 1 });
      setKeyword(search);
    }
  };

  const onClickSearch = () => {
    if (isUnsold) refetch({ isSoldout: false, search, page: 1 });
    if (isSold) refetchSoldout({ isSoldout: true, search, page: 1 });
    setKeyword(search);
  };

  const value = {
    data,
    search,
    setSearch,
    keyword,
    setKeyword,
    onClickSearch,
    onPressSearch,
    isUnsold,
    setIsUnsold,
    isSold,
    setIsSold,
    dataSoldout,
  };

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev?.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  function onLoadMoreSoldout() {
    if (!data) return;

    fetchMoreSoldout({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev?.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }
  return (
    <UsedListContext.Provider value={value}>
      <Used onLoadMore={onLoadMore} onLoadMoreSoldout={onLoadMoreSoldout} />
    </UsedListContext.Provider>
  );
};

export default withAuth(UsedPage);
