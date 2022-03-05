import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYTING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "../MyPage.queries";
import { IContextMyPoint } from "../MyPage.types";
import { MyPointUI } from "./MyPoint.presenter";

export const MyPointContext = createContext<IContextMyPoint>({});

export function MyPoint() {
  const { data: whole, refetch: wholeRefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  const { data: charge, refetch: chargeRefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const { data: chargeCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING);

  const { data: buying, refetch: buyingRefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  const { data: buyingCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfBuying">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYTING);

  const { data: selling, refetch: sellingRefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  const { data: sellingCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING);

  const [isWhole, setIsWhole] = useState(true);
  const [isCharge, setIsCharge] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [isSelling, setIsSelling] = useState(false);

  const onClickIsWhole = () => {
    setIsWhole(true);
    setIsCharge(false);
    setIsBuying(false);
    setIsSelling(false);
  };

  const onClickIsCharge = () => {
    setIsCharge(true);
    setIsWhole(false);
    setIsBuying(false);
    setIsSelling(false);
  };

  const onClickIsBuying = () => {
    setIsBuying(true);
    setIsWhole(false);
    setIsCharge(false);
    setIsSelling(false);
  };

  const onClickIsSelling = () => {
    setIsSelling(true);
    setIsWhole(false);
    setIsCharge(false);
    setIsBuying(false);
  };

  const value = {
    buying,
    buyingRefetch,
    buyingCount,
    whole,
    wholeRefetch,
    charge,
    chargeRefetch,
    chargeCount,
    selling,
    sellingRefetch,
    sellingCount,
  };

  return (
    <MyPointContext.Provider value={value}>
      <MyPointUI
        buying={buying}
        isWhole={isWhole}
        isCharge={isCharge}
        isBuying={isBuying}
        isSelling={isSelling}
        onClickIsWhole={onClickIsWhole}
        onClickIsCharge={onClickIsCharge}
        onClickIsBuying={onClickIsBuying}
        onClickIsSelling={onClickIsSelling}
      />
    </MyPointContext.Provider>
  );
}
