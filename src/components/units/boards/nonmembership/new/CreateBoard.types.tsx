import { ChangeEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsCreateBoard {
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
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
  userInfo: {
    writer: string;
    password: string;
    title: string;
    youtubeUrl: string;
    images: string[];
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
  data: Pick<IQuery, "fetchBoard">;
}
