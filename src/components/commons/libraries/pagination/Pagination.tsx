import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./pagination.emotion";

interface IProps {
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount"> | undefined;
  refetch: any;
  keyword: string;
}

export default function Pagination(props: IProps) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(
    Number(props.dataBoardsCount?.fetchBoardsCount) / 10
  );
  const [goPrevPage, setGoPrevPage] = useState("〈");
  const [golastPage, setGoLastPage] = useState("〉");
  const [goMinPage, setGoMinPage] = useState("〈〈");
  const [goMaxPage, setGoMaxPage] = useState("〉〉");
  const [pageId, setPageId] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setPageId(Number(event.currentTarget.id));
    props.refetch({
      search: props.keyword,
      page: Number(event.currentTarget.id),
    });
  };

  console.log(`start: ${startPage}, Id: ${pageId}`);
  const onClickPrevPage = () => {
    if (startPage <= 11) {
      setGoPrevPage((prev) => "");
      setGoMinPage((prev) => "");
    } else {
      setGoLastPage("〉");
      setGoMaxPage((prev) => "〉〉");
    }
    setStartPage((prev) => prev - 10);
    setPageId((prev) => startPage - 10);
    props.refetch({ search: props.keyword, page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 20 > lastPage) {
      setGoLastPage((prev) => "");
      setGoMaxPage((prev) => "");
    } else {
      setGoPrevPage("〈");
      setGoMinPage((prev) => "〈〈");
    }
    setStartPage((prev) => prev + 10);
    setPageId((prev) => 10 + startPage);
    props.refetch({ search: props.keyword, page: startPage + 10 });
  };

  const onClickGoMinPage = () => {
    setGoMinPage("");
    setGoMaxPage("〉〉");
    setGoLastPage("〉");
    setGoPrevPage((prve) => "");
    setStartPage((prev) => 1);
    setPageId((prev) => 1);
    props.refetch({ search: props.keyword, page: 1 });
  };

  const onClickGoMaxPage = () => {
    props.refetch({ search: props.keyword, page: lastPage });
    setStartPage((prev) => lastPage);
    setGoMaxPage("");
    setGoMinPage("〈〈");
    setGoPrevPage("〈");
    setGoLastPage((prev) => "");
    setPageId((prev) => lastPage);
  };

  return (
    <S.Wrapper>
      <span className="MinMax" onClick={onClickGoMinPage}>
        {goMinPage}
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span id="prev" onClick={onClickPrevPage}>
        {goPrevPage}
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {new Array(10)
        .fill(1)
        .map(
          (_, idx) =>
            idx + startPage <= lastPage && (
              <S.pageNum
                pageId={pageId}
                className={String(pageId)}
                onClick={onClickPage}
                key={idx + startPage}
                id={String(idx + startPage)}
              >{` ${idx + startPage} `}</S.pageNum>
            )
        )}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span id="next" onClick={onClickNextPage}>
        {golastPage}
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="MinMax" onClick={onClickGoMaxPage}>
        {goMaxPage}
      </span>
    </S.Wrapper>
  );
}
