import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IPropsCommentsEditUI {
  resize: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriterInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  contents: string;
  writerInfo: { password: string; rating: number };
  data: IBoardComment;
  modal: boolean;
  modalMessage: string;
}

export interface IPropsCommentsEdit {
  data: IBoardComment;
  onClickFinishEdit: () => void;
}
