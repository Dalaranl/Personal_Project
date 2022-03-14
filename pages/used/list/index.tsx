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
  const [isSold, setIsSold] = useState(false);
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: isSold, page: 1, search: "" },
  });

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isDateSearchMore, setIsDateSearchMore] = useState(true);

  const onPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      refetch({ isSoldout: isSold, search, page: 1 });
      setKeyword(search);
    }
  };

  const onClickSearch = () => {
    refetch({ isSoldout: isSold, search, page: 1 });
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
    isSold,
    setIsSold,
    setIsDateSearchMore,
  };

  function onLoadMore() {
    if (!data) return;
    if (!isDateSearchMore) return;

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

  return (
    <UsedListContext.Provider value={value}>
      <Used onLoadMore={onLoadMore} />
    </UsedListContext.Provider>
  );
};

export default withAuth(UsedPage);
