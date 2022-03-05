import { useRouter } from "next/router";
import { useFetchUsedItem } from "../../../../src/components/commons/hooks/useFetchUsedItem";
import UsedNewPage from "../../new";

export default function EditPage() {
  const router = useRouter();
  const { loading, data } = useFetchUsedItem(String(router.query.useditemid));

  if (loading) return "Loading..";

  return <UsedNewPage isEdit={true} data={data} />;
}
