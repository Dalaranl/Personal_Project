import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IUsedListContext {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  onClickSearch?: () => void;
  onPressSearch?: (e: KeyboardEvent<HTMLInputElement>) => void;
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
  keyword?: string;
  setKeyword?: Dispatch<SetStateAction<string>>;
  isSold?: boolean;
  setIsSold?: Dispatch<SetStateAction<boolean>>;
  setIsDateSearchMore?: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsUsed {
  onLoadMore: () => void;
}

export interface IPropsUsedUI {
  data: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
  start: number;
  end: number;
  isDate: boolean;
  onChangeGetDate: (dates: any) => void;
  onClickIsSold: () => void;
}

export interface IPropsUsedList {
  items: IUseditem;
}

export interface IPropsUsedListUI {
  items: IUseditem;
}

export interface IPropsUsedSoldoutList {
  items: IUseditem;
}

export interface IPropsUnsoldBtn {
  isUnsold?: boolean;
}

export interface IPropsSoldBtn {
  isSold?: boolean;
}
