import { Dispatch, SetStateAction } from "react";
import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IPropsProductDetail {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IPropsDetailPage {
  usedItemData: {
    name: string;
    remarks: string;
    contents: string;
    images: [string];
  };
}

export interface IProductDetailContext {
  itemInfo?: {
    _id: string;
    name: string;
    remarks: string;
    contents: string;
    price: number;
    pickedCount: number;
  };
  setItemInfo?: Dispatch<
    SetStateAction<{
      _id: string;
      name: string;
      remarks: string;
      contents: string;
      price: number;
      pickedCount: number;
    }>
  >;
  itemAddress?: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  setItemAddress?: Dispatch<
    SetStateAction<{
      zipcode: string;
      address: string;
      addressDetail: string;
    }>
  >;
  tags?: string[];
  setTags?: Dispatch<SetStateAction<string[]>>;
  images?: string[];
  setImages?: Dispatch<SetStateAction<string[]>>;
  sellerInfo?: {
    name: string;
    picture: string;
  };
  setSellerInfo?: Dispatch<
    SetStateAction<{
      name: string;
      picture: string;
    }>
  >;
  isInquire?: boolean;
  setIsInquire?: Dispatch<SetStateAction<boolean>>;
  requireinput?: string;
  setRequireInput?: Dispatch<SetStateAction<string>>;
  useditemId?: string;
  contents?: string;
  setContents?: Dispatch<SetStateAction<string>>;
  isSubmit?: boolean;
  setIsSubmit?: Dispatch<SetStateAction<boolean>>;
  isBtn?: boolean;
  setIsBtn?: Dispatch<SetStateAction<boolean>>;
  isAnswer?: boolean;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  questionId?: string;
  setQuestionId?: Dispatch<SetStateAction<string>>;
  questionAnswer?: any[];
  setQuestionAnswer?: Dispatch<SetStateAction<any[]>>;
  item?: IUseditem | undefined;
}

export interface IPropsInfoBtn {
  isInfo: boolean;
}
export interface IPropsInquireBtn {
  isInquire: boolean | undefined;
}

export interface IPropsSubmitBtn {
  isSubmit: boolean | undefined;
}

export interface IPropsTextarea {
  count: number;
}

export interface IPropsReInquireList {
  onClickShow: () => void;
}

export interface IPropsInquireList {
  clickId: string;
  answerId: string;
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  setClickId: Dispatch<SetStateAction<string>>;
  onClickIsEdit: (id: string) => () => void;
  onClickShow: (id: string) => () => void;
  onClickAnswer: (id: string) => () => void;
  onClickOpen: () => void;
}
