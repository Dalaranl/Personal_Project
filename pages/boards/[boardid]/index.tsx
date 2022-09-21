import request from "graphql-request";
import BoardDetail from "../../../src/components/units/boards/nonmembership/boardid/BoardDetail.container";
import { FETCH_BOARD } from "../../../src/components/units/boards/nonmembership/detail/detail.queries";
import Head from "next/head";
import { useEffect, useState } from "react";

export interface IPropsBoardDetailPage {
  boardData: {
    title: string;
    contents: string;
    images: [string];
  };
}

const STORAGE = "https://storage.googleapis.com/";

export default function BoardDetailPage(props: IPropsBoardDetailPage) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props.boardData.images[0]) setUrl(STORAGE + props.boardData.images[0]);
    else setUrl("img/listTheme.jpeg");
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content={props.boardData?.title} />
        <meta property="og:description" content={props.boardData?.contents} />
        <meta property="og:image" content={url} />
      </Head>
      <BoardDetail />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend07.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: String(context.query.boardid) }
  );

  return {
    props: {
      boardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
