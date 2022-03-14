import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsCommentListUI {
  datas: Pick<IQuery, "fetchBoardComments"> | undefined;
  modal: boolean;
  passModal: boolean;
  modalMessage: string;
  commentsId: string;
  isEditId: string;
  handleClose: () => void;
  handleOpen: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  passModalClose: () => void;
  passModalOpen: (e: MouseEvent<SVGSVGElement>) => void;
  onClickEdit: (e: MouseEvent<SVGSVGElement>) => void;
  onClickFinishEdit: () => void;
}
