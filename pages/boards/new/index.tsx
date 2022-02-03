import { IQuery } from "../../../src/commons/types/generated/types";
import CreateBoard from "../../../src/components/units/boards/nonmembership/new/CreateBoard.container";

interface IProps {
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export default function NewPage(props: IProps) {
  return <CreateBoard isEdit={props.isEdit} data={props.data} />;
}
