import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../../../../commons/hooks/useFetchUserInfo";
import { useProductDetail } from "../../../../../../commons/hooks/useProductDetail";
import { ProductDetailContext } from "../../../ProductDetail.container";
import { CREATE_USEDITEM_QUESTION } from "../../../ProductDetail.queries";
import * as S from "../inquire.emotions";

const STORAGE = "https://storage.googleapis.com/";

export default function CreateInquire() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const { onClickShowBtn, onChangeContents, onClickCancel } =
    useProductDetail();
  const { contents, isBtn, isSubmit, setContents, setIsBtn } =
    useContext(ProductDetailContext);

  const { data } = useFetchUserInfo();
  const loggedInfo = data?.fetchUserLoggedIn;

  const onClickSubmit = async () => {
    if (!contents) return;
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.useditemid),
          createUseditemQuestionInput: {
            contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      setContents && setContents("");
      setIsBtn && setIsBtn(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.NewWrapper>
      <S.New>
        <S.NewProfile>
          <img
            src={STORAGE + loggedInfo?.picture}
            onError={(e) => {
              e.currentTarget.src = "/img/defaultProfile.jpeg";
            }}
          />
        </S.NewProfile>
        <S.NewContents>
          <S.NewContentsInput
            placeholder="문의 내용 추가"
            value={contents}
            onClick={onClickShowBtn}
            onChange={onChangeContents}
          />
          {isBtn ? (
            <S.NewOption>
              <S.CancelBtn onClick={onClickCancel}>취소</S.CancelBtn>
              <S.SubmitBtn isSubmit={isSubmit} onClick={onClickSubmit}>
                등록
              </S.SubmitBtn>
            </S.NewOption>
          ) : (
            <S.NewOption></S.NewOption>
          )}
        </S.NewContents>
      </S.New>
    </S.NewWrapper>
  );
}
