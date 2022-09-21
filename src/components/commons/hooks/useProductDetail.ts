import { Reference, StoreObject, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionArgs,
  IMutationToggleUseditemPickArgs,
} from "../../../commons/types/generated/types";
import { ProductDetailContext } from "../../units/used/detail/ProductDetail.container";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  DELETE_USEDITEM_QUESTION,
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM,
  FETCH_USEDITEMS_IPICKED,
  TOGGLE_USEDITEM_PICK,
} from "../../units/used/detail/ProductDetail.queries";

export function useProductDetail() {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { setIsBtn, setIsSubmit, setContents, setQuestionAnswer } =
    useContext(ProductDetailContext);

  const onClickShowBtn = () => {
    setIsBtn && setIsBtn(true);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setIsSubmit && setIsSubmit(true);

    if (!value) setIsSubmit && setIsSubmit(false);

    setContents && setContents(value);
  };

  const onClickCancel = () => {
    setIsBtn && setIsBtn(false);
    setContents && setContents("");
  };

  const onClickDeleteQuestion = (_id: string) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: _id,
        },
        update(cache, { data }) {
          const deleteId = data?.deleteUseditemQuestion;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const filteredPrev:any = prev.filter(
                  (el: Reference | StoreObject | undefined) =>
                    readField("_id", el) !== deleteId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDeleteQuestionAnswer = (_id: string, id: string) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: _id,
        },
        update(cache, { data }) {
          const deleteId = data?.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const filteredPrev = prev.filter(
                  (el: Reference | StoreObject | undefined) =>
                    readField("_id", el) !== deleteId
                );
                setQuestionAnswer && setQuestionAnswer([...filteredPrev]);
                return [...filteredPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBuyItem = (_id: string) => async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: _id,
        },
      });
      alert("구매를 성공하였습니다.");
      router.push("/used/list");
    } catch (error) {
      if (error instanceof Error) alert("구매를 실패하였습니다.");
    }
  };

  const onClickDeleteItem = (useditemId: string) => async () => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId,
        },
      });

      alert("상품 삭제를 성공하였습니다.");
      router.push("/used/list");
    } catch (error) {
      if (error instanceof Error) alert("상품 삭제를 실패하였습니다.");
    }
  };

  const onClickPick = (useditemId: string, search: string) => async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId },
          },
          {
            query: FETCH_USEDITEMS_IPICKED,
            variables: { useditemId, search },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveToList = () => {
    router.push("/used/list");
  };

  const onClickMoveToEdit = (_id: string) => () => {
    router.push(`/used/${_id}/edit`);
  };

  return {
    onClickShowBtn,
    onChangeContents,
    onClickCancel,
    onClickDeleteQuestion,
    onClickDeleteQuestionAnswer,
    onClickBuyItem,
    onClickMoveToList,
    onClickMoveToEdit,
    onClickDeleteItem,
    onClickPick,
  };
}
