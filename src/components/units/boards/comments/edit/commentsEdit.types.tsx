import { ChangeEvent, KeyboardEvent, MouseEvent, SyntheticEvent } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IPropsCommentsEditUI {
  resize: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (
    e: SyntheticEvent<Element, Event>,
    value: number | null
  ) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  contents: string;
  password: string;
  rating: number;
  data: IBoardComment;
  modal: boolean;
  modalMessage: string;
}

export interface IPropsCommentsEdit {
  data: IBoardComment;
  onClickFinishEdit: () => void;
}
