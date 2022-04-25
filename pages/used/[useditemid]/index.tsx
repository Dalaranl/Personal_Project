import { useQuery } from "@apollo/client";
import request from "graphql-request";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import ProductDetail from "../../../src/components/units/used/detail/ProductDetail.container";
import { FETCH_USEDITEM } from "../../../src/components/units/used/detail/ProductDetail.queries";
import { IPropsDetailPage } from "../../../src/components/units/used/detail/ProductDetail.types";
import Head from "next/head";
import { useEffect, useState } from "react";

const STORAGE = "https://storage.googleapis.com/";

export default function DetailPage(props: IPropsDetailPage) {
  const router = useRouter();
  const { loading, data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemid) },
  });

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props.usedItemData.images[0])
      setUrl(STORAGE + props.usedItemData.images[0]);
    else setUrl("img/listTheme.jpeg");
  }, []);

  if (loading) return "loading...";

  return (
    <>
      <Head>
        <meta property="og:title" content={props.usedItemData?.name} />
        <meta
          property="og:description"
          content={props.usedItemData?.contents}
        />
        <meta property="og:image" content={url} />
      </Head>
      <ProductDetail data={data} />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: String(context.query.useditemid) }
  );

  return {
    props: {
      usedItemData: {
        name: result.fetchUseditem.name,
        contents: result.fetchUseditem.contents,
        images: result.fetchUseditem.images,
      },
    },
  };
};
