import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsCreateBoard {
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IPropsCreateBoardUI {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onChangeUserInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateBoard: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  onChangeAddress: (address: string, zonecode: string) => void;
  SetIsDaumPost: () => void;
  onChangeDetailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickReset: () => void;
  onClickUpdateBoard: () => void;
  onClickImg: () => void;
  onChangeUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickEditImg: (e: MouseEvent<HTMLImageElement>) => void;

  userInfo: {
    writer: string;
    password: string;
    title: string;
    youtubeUrl: string;
  };
  adDress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  contents: string;
  modal: boolean;
  isDaumPost: boolean;
  modalMessage: string;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  fileRef: any;
  imgUrl: string | undefined;
  images: string[];
  editImages: string[];
}
