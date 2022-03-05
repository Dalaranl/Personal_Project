import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../commons/types/generated/types";

export interface IContextMyPageContext {
  isMyProfile?: boolean;
  setIsMyProfile?: Dispatch<SetStateAction<boolean>>;
  isMyProduct?: boolean;
  setIsMyProduct?: Dispatch<SetStateAction<boolean>>;
  isMyPoint?: boolean;
  setIsMyPoint?: Dispatch<SetStateAction<boolean>>;
}
export interface IPropsMyProductUI {
  isSold: boolean;
  isBought: boolean;
  isPicked: boolean;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickIsSold: () => void;
  onClickIsBought: () => void;
  onClickIsPicked: () => void;
  onChangeSoldPage: (page: number, pageSize: number) => void;
  onChangeBoughtPage: (page: number, pageSize: number) => void;
  onChangePickedPage: (page: number, pageSize: number) => void;
  sold: Pick<IQuery, "fetchUseditemsISold"> | undefined;
  bought: Pick<IQuery, "fetchUseditemsIBought"> | undefined;
  picked: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  soldCount: number | undefined;
  boughtCount: number | undefined;
  pickedCount: number | undefined;
}

export interface IPropsMyPageUI {
  onClickIsMyProduct: () => void;
  onClickIsMyPoint: () => void;
  onClickIsMyProfile: () => void;
}

export interface IPropsMyPointUI {
  buying: Pick<IQuery, "fetchPointTransactionsOfBuying"> | undefined;
  isWhole: boolean;
  isCharge: boolean;
  isBuying: boolean;
  isSelling: boolean;
  onClickIsWhole: () => void;
  onClickIsCharge: () => void;
  onClickIsBuying: () => void;
  onClickIsSelling: () => void;
}

export interface IContextMyPoint {
  buying?: Pick<IQuery, "fetchPointTransactionsOfBuying"> | undefined;
  buyingRefetch?: (
    variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>
  >;
  buyingCount?: Pick<IQuery, "fetchPointTransactionsCountOfBuying"> | undefined;
  whole?: Pick<IQuery, "fetchPointTransactions"> | undefined;
  wholeRefetch?: (
    variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>;
  charge?: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
  chargeRefetch?: (
    variables?: Partial<IQueryFetchPointTransactionsOfLoadingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfLoading">>
  >;
  chargeCount?:
    | Pick<IQuery, "fetchPointTransactionsCountOfLoading">
    | undefined;
  selling?: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
  sellingRefetch?: (
    variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfSelling">>
  >;
  sellingCount?:
    | Pick<IQuery, "fetchPointTransactionsCountOfSelling">
    | undefined;
}

export interface IPropsMyProfileUI {
  onClickSubmit: () => Promise<void>;
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickProfile: () => void;
  onChangePassword: (
    name: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: () => void;
  inputRef: RefObject<HTMLInputElement>;
  name: string;
  readerImg: string | null | undefined;
}

export interface IPropsMyProfileBtn {
  isMyProfile: boolean | undefined;
}

export interface IPropsMyProductBtn {
  isMyProduct: boolean | undefined;
}

export interface IPropsMyPointBtn {
  isMyPoint: boolean | undefined;
}
