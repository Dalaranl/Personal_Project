import { useMutation } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";
import {
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "../../../ProductDetail.queries";
import * as S from "../inquire.emotions";

const STORAGE = "https://storage.googleapis.com/";

interface IProps {
  setEditId: Dispatch<SetStateAction<string>>;
  setClickId: Dispatch<SetStateAction<string>>;
  contents: string;
  _id: string;
  questionid: string;
}

export default function UpdateInquireAnswer(props: IProps) {
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);
  const [contents, setContents] = useState(props.contents || "");
  const [isSubmit, setIsSubmit] = useState(false);

  const { data } = useFetchUserInfo();
  const loggedInfo = data?.fetchUserLoggedIn;

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setIsSubmit(true);

    if (!value) setIsSubmit(false);

    setContents(value);
  };

  const onClickCancel = () => {
    props.setEditId("");
    props.setClickId("");
    setContents("");
  };

  const onClickUpdateAnswer = async () => {
    console.log(props._id);
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: {
              page: 1,
              useditemQuestionId: props.questionid,
            },
          },
        ],
      });

      props.setEditId("");
      props.setClickId("");
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
            value={contents}
            onChange={onChangeContents}
          />

          <S.NewOption>
            <S.CancelBtn onClick={onClickCancel}>취소</S.CancelBtn>
            <S.EditBtn isSubmit={isSubmit} onClick={onClickUpdateAnswer}>
              등록
            </S.EditBtn>
          </S.NewOption>
        </S.AnswerContents>
      </S.AnswerBox>
    </S.AnswerWrapper>
  );
}
