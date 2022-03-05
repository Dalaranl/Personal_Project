import { useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../../../commons/types/generated/types";
import { ProductDetailContext } from "../../../ProductDetail.container";
import { FETCH_USEDITEM_QUESTIONS } from "../../../ProductDetail.queries";
import * as S from "../inquire.emotions";
import InquireList from "./InquireList";

export default function InfiniteAnswer() {
  const { isInquire, useditemId, setIsAnswer, setQuestionId } =
    useContext(ProductDetailContext);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(useditemId) },
  });
  // const { data: redata, fetchMore: refetchMore } = useQuery(
  //   FETCH_USEDITEM_QUESTIONS_ANSWERS
  // );
  const [clickId, setClickId] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [answerId, setAnswerId] = useState("");

  const onClickIsEdit = (id: string) => () => {
    setIsEdit((prev) => !prev);
    if (isEdit) setClickId(id);
    else setClickId("");
  };
  const onClickOpen = () => {
    setAnswerId("");
  };

  const onClickShow = (id: string) => async () => {
    setAnswerId(id);
  };

  const onClickAnswer = (id: string) => () => {
    setQuestionId && setQuestionId(id);
    setIsAnswer && setIsAnswer((prev) => !prev);
  };

  const loadMore = () => {
    if (isInquire) {
      if (!data) return;
      if (data.fetchUseditemQuestions.length < 10) return;

      fetchMore({
        variables: {
          page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.fetchUseditemQuestions)
            return {
              fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
            };
          else {
            return {
              fetchUseditemQuestions: [
                ...prev?.fetchUseditemQuestions,
                ...fetchMoreResult?.fetchUseditemQuestions,
              ],
            };
          }
        },
      });
    }
  };
  console.log(data);

  return (
    <S.ListWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true || false}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
        useWindow={false}
      >
        <InquireList
          onClickAnswer={onClickAnswer}
          onClickShow={onClickShow}
          onClickIsEdit={onClickIsEdit}
          setClickId={setClickId}
          clickId={clickId}
          onClickOpen={onClickOpen}
          answerId={answerId}
          data={data}
        />
      </InfiniteScroll>
    </S.ListWrapper>
  );
}
