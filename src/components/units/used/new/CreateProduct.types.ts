import { Dispatch, SetStateAction } from "react";
import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface ICreateProductContext {
  wrapperSize?: number;
  setWrapperSize?: Dispatch<SetStateAction<number>>;
  tags?: string[];
  setTags?: Dispatch<SetStateAction<string[]>>;
  images?: (string | File)[];
  setImages?: Dispatch<SetStateAction<(string | File)[]>>;
  readerImg?: string[];
  setReaderImg?: Dispatch<SetStateAction<string[]>>;
  contents?: string;
  setContents?: Dispatch<SetStateAction<string>>;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  itemInfo?: {
    fetchUseditem?: IUseditem | undefined;
  };
  setItemInfo?: Dispatch<
    SetStateAction<{ fetchUseditem?: IUseditem | undefined }>
  >;
  openModal?: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  modalMessage?: string;
  setModalMessage?: Dispatch<SetStateAction<string>>;
  productInput?: {
    name: string;
    remarks: string;
    price: number;
  };
  setProductInput?: Dispatch<
    SetStateAction<{
      name: string;
      remarks: string;
      price: number;
    }>
  >;
  address?: {
    zipcode: string;
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
  setAddress?: Dispatch<
    SetStateAction<{
      zipcode: string;
      address: string;
      addressDetail: string;
      lat: number;
      lng: number;
    }>
  >;
  isSearch?: boolean;
  setIsSearch?: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsEmotions {
  wrapperSize: number | undefined;
}

export interface IPropsCreateProductUI {}

export interface IUseForm {
  name: string;
  remarks: string;
  price: number;
}

export interface IPropsUsedNewPage {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
