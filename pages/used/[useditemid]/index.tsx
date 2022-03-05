import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import ProductDetail from "../../../src/components/units/used/detail/ProductDetail.container";
import { FETCH_USEDITEM } from "../../../src/components/units/used/detail/ProductDetail.queries";

export default function DetailPage() {
  const router = useRouter();
  const { loading, data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemid) },
  });

  if (loading) return "loading...";

  return <ProductDetail data={data} />;
}
