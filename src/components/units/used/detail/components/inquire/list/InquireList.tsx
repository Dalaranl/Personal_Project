import * as S from "../inquire.emotions";
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { ProductDetailContext } from "../../../ProductDetail.container";
import { IPropsInquireList } from "../../../ProductDetail.types";
import CreateInquireAnswer from "../new/createInqireAnswer";
import ReInquireList from "./reinquirelist";
import { useProductDetail } from "../../../../../../commons/hooks/useProductDetail";
import { DateToString } from "../../../../../../../commons/libraries/calcDate";
import UpdateInquire from "../new/updateInquire";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";

export default function InquireList(props: IPropsInquireList) {
  // const client = useApolloClient();
  const { isAnswer, questionId } = useContext(ProductDetailContext);
  const { onClickDeleteQuestion } = useProductDetail();
  const [editId, setEditId] = useState("");

  const { data } = useFetchUserInfo();
  const loggedInfo = data?.fetchUserLoggedIn;
  const items = props.data?.fetchUseditemQuestions;

  const onClickEdit = (_id: string) => () => {
    setEditId(_id);
  };

  return (
    <S.ListWrapper>
      {items?.map((items) =>
        editId === items._id ? (
          <UpdateInquire
            setEditId={setEditId}
            contents={items.contents}
            setclickId={props.setClickId}
            _id={items._id}
          />
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
                  <span id="answer" onClick={props.onClickAnswer(items._id)}>
                    답글
                  </span>
                </S.Name>
                {loggedInfo?.email === items.user.email && (
                  <S.Func>
                    <S.FuncBtn onClick={props.onClickIsEdit(items._id)}>
                      <span>⚙︎</span>
                    </S.FuncBtn>
                    {items._id === props.clickId && (
                      <S.EditDelete>
                        <div onClick={onClickEdit(items._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                          </svg>
                          <span>수정하기</span>
                        </div>
                        <div onClick={onClickDeleteQuestion(items._id)}>
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

              {isAnswer && questionId === items._id && (
                <S.Answer>
                  <CreateInquireAnswer />
                </S.Answer>
              )}

              {props.answerId === items._id ? (
                <ReInquireList
                  onClickOpen={props.onClickOpen}
                  onClickAnswer={props.onClickAnswer}
                  _id={items._id}
                />
              ) : (
                <S.RerequireAsk onClick={props.onClickShow(items._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                  <span>답글 보기</span>
                </S.RerequireAsk>
              )}
            </S.ListInfo>
          </S.List>
        )
      )}
    </S.ListWrapper>
  );
}
