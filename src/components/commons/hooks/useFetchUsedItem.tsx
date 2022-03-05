import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../../units/used/new/CreateProduct.queries";

export function useFetchUsedItem(id: string) {
  const { loading, data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, { variables: { useditemId: id } });

  return { data, loading };
}
