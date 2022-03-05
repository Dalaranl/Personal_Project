import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "../inquire.emotions";
import { useProductDetail } from "../../../../../../commons/hooks/useProductDetail";
import { DateToString } from "../../../../../../../commons/libraries/calcDate";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTIONS_ANSWERS } from "../../../ProductDetail.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../../commons/types/generated/types";
import UpdateInquireAnswer from "../new/updateInquireAnswer";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";

interface IProps {
  _id: string;
  onClickOpen: () => void;
  onClickAnswer: (id: string) => () => void;
}

export default function ReInquireList(props: IProps) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: { page: 1, useditemQuestionId: props._id },
  });

  const { data: userData } = useFetchUserInfo();
  const loggedInfo = userData?.fetchUserLoggedIn;

  const { onClickDeleteQuestionAnswer } = useProductDetail();
  const [clickId, setClickId] = useState("");
  const [editId, setEditId] = useState("");

  const onClickIsEdit = (_id: string) => () => {
    if (clickId) setClickId("");
    else setClickId(_id);
  };

  const onClickAnswerEdit = (_id: string) => () => {
    setEditId(_id);
  };

  const items = data?.fetchUseditemQuestionAnswers;
  return (
    <S.Test>
      <S.RerequireAsk onClick={props.onClickOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
        <span>답글 숨기기</span>
      </S.RerequireAsk>
      {items?.length ? (
        <S.ReInquireWrapper>
          {items.map((items) =>
            editId === items._id ? (
              <Fragment key={uuidv4()}>
                <UpdateInquireAnswer
                  questionid={items.useditemQuestion._id}
                  setEditId={setEditId}
                  setClickId={setClickId}
                  _id={items._id}
                  contents={items.contents}
                />
              </Fragment>
            ) : (
              <S.List key={uuidv4()}>
                <S.ListProfile>
                  <img src="/img/defaultProfile.jpeg" />
                </S.ListProfile>
                <S.ListInfo>
                  <S.ListName>
                    <S.Name>
                      <span>{items.user.name}</span>
                      <span id="createAt">{DateToString(items.createdAt)}</span>
                      <span
                        id="answer"
                        onClick={props.onClickAnswer(
                          items.useditemQuestion._id
                        )}
                      >
                        답글
                      </span>
                    </S.Name>
                    {loggedInfo?.email === items.user.email && (
                      <S.Func>
                        <S.FuncBtn onClick={onClickIsEdit(items._id)}>
                          <span>⚙︎</span>
                        </S.FuncBtn>
                        {items._id === clickId && (
                          <S.EditDelete>
                            <div onClick={onClickAnswerEdit(items._id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                              </svg>
                              <span>수정하기</span>
                            </div>
                            <div
                              onClick={onClickDeleteQuestionAnswer(
                                items._id,
                                items.useditemQuestion._id
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg>
                              <span>삭제하기</span>
                            </div>
                          </S.EditDelete>
                        )}
                      </S.Func>
                    )}
                  </S.ListName>
                  <S.ListContents disabled value={items.contents} />
                </S.ListInfo>
              </S.List>
            )
          )}
        </S.ReInquireWrapper>
      ) : (
        <S.NoAnswer>
          <span id="none">답글이 없습니다.</span>
        </S.NoAnswer>
      )}
    </S.Test>
  );
}
