import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsBoardDetailUi {
  data?: Pick<IQuery, "fetchBoard">;
  isYoutube: boolean;

  onClickOpen: () => void;
}
