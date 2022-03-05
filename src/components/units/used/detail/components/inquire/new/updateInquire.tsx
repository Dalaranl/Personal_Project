import { Reference, StoreObject, useMutation } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";
import { UPDATE_USEDITEM_QUESTION } from "../../../ProductDetail.queries";
import * as S from "../inquire.emotions";

const STORAGE = "https://storage.googleapis.com/";

interface IProps {
  setEditId: Dispatch<SetStateAction<string>>;
  setclickId: Dispatch<SetStateAction<string>>;
  contents: string;
  _id: string;
}

export default function UpdateInquire(props: IProps) {
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);
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
    props.setclickId("");
    setContents("");
  };

  const onClickUpdateQuestion = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props._id,
        },
        update(cache, { data }) {
          const updateId = data?.updateUseditemQuestion._id;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const filterPrev = prev.filter(
                  (el: Reference | StoreObject | undefined) =>
                    readField("_id", el) !== updateId
                );

                return [data?.updateUseditemQuestion, ...filterPrev];
              },
            },
          });
        },
      });

      props.setEditId("");
      props.setclickId("");
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
            <S.EditBtn isSubmit={isSubmit} onClick={onClickUpdateQuestion}>
              등록
            </S.EditBtn>
          </S.NewOption>
        </S.AnswerContents>
      </S.AnswerBox>
    </S.AnswerWrapper>
  );
}
