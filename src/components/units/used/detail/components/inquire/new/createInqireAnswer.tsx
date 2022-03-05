import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";
import { ProductDetailContext } from "../../../ProductDetail.container";
import {
  CREATE_USEDITEM_QUESTIONANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "../../../ProductDetail.queries";
import * as S from "../inquire.emotions";

const STORAGE = "https://storage.googleapis.com/";

export default function CreateInquireAnswer() {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTIONANSWER);
  const [isReSubmit, setIsReSubmit] = useState(false);
  const [isReBtn, setIsReBtn] = useState(false);
  const [reContents, setReContents] = useState("");
  const { questionId, setIsAnswer, setQuestionId } =
    useContext(ProductDetailContext);

  const { data } = useFetchUserInfo();
  const loggedInfo = data?.fetchUserLoggedIn;

  const onChangeReContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setIsReSubmit(true);

    if (!value) setIsReSubmit(false);
    setReContents(value);
  };

  const onClickReCancel = () => {
    setIsReBtn(false);
    setReContents("");
  };

  const onClickisReBtn = () => {
    setIsReBtn(true);
  };

  const onClickAnswer = async () => {
    if (!questionId) return;
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: reContents,
          },
          useditemQuestionId: questionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: questionId,
              page: 1,
            },
          },
        ],
      });
      setQuestionId && setQuestionId("");
      setIsAnswer && setIsAnswer((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.AnswerWrapper>
      <S.AnswerBox>
        <S.AnswerProfile>
          <img
            src={STORAGE + loggedInfo?.picture}
            onError={(e) => {
              e.currentTarget.src = "/img/defaultProfile.jpeg";
            }}
          />
        </S.AnswerProfile>
        <S.AnswerContents>
          <S.NewReContentsInput
            placeholder="문의 내용 추가"
            value={reContents}
            onClick={onClickisReBtn}
            onChange={onChangeReContents}
          />
          {isReBtn ? (
            <S.NewOption>
              <S.CancelBtn onClick={onClickReCancel}>취소</S.CancelBtn>
              <S.ReSubmitBtn isSubmit={isReSubmit} onClick={onClickAnswer}>
                등록
              </S.ReSubmitBtn>
            </S.NewOption>
          ) : (
            <S.NewOption></S.NewOption>
          )}
        </S.AnswerContents>
      </S.AnswerBox>
    </S.AnswerWrapper>
  );
}
