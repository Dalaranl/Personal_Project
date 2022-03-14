import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import BoardList from "../../../src/components/units/boards/nonmembership/list/BoardList.container";
import { FETCH_BOARDS } from "../../../src/components/units/boards/nonmembership/list/BoardList.queries";

export default function ListPage() {
  const { loading, data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  if (loading) return "Loading...";

  return <BoardList data={data} refetch={refetch} />;
}
