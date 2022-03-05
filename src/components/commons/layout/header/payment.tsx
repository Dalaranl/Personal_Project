import FullSizeButton from "../../buttons/fullSize";
import Head from "next/head";
import * as S from "./Header.emotions";
import { ChangeEvent, useState } from "react";
import { useFetchUserInfo } from "../../hooks/useFetchUserInfo";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./payment.queries";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

interface IProps {
  handleClose: () => void;
}

export default function Payment(props: IProps) {
  const { data } = useFetchUserInfo();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const userInfo = data?.fetchUserLoggedIn;

  const onChangeAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const price = value.substring(0, value.length - 1);

    setAmount(Number(price));
  };

  const onClickPayment = () => {
    // @ts-ignore
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", => 중복되지 않는 고유값을 주어야한다.(안그러면 에러남), 아예 안쓰면 자동으로 id를 생성해준다.
        name: "포인트 충전",
        amount,
        buyer_email: userInfo?.email,
        buyer_name: userInfo?.name,
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("결제에 성공하였습니다.");
            props.handleClose();
            window.location.reload();
          } catch (error) {
            if (error instanceof Error) {
              alert("서버 오류로 인해 결제에 실패하였습니다.");
            }
          }
          // 1. 백엔드에 결제관련 데이터 념겨주기
          // => 즉, 뮤테이션 실행하기!!!
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하였습니다.");
        }
      }
    );
  };

  return (
    <S.ChargeModalWrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.ChargeHeader>
        <span>Point 충전하기</span>
      </S.ChargeHeader>
      <S.ChargeInfo>
        <div>
          <div className="name">보유한 Point</div>
          <span>{userInfo?.userPoint?.amount} p</span>
        </div>
        <div>
          <div className="name">충전 후 Point</div>
          <span>{Number(userInfo?.userPoint?.amount) + amount} p</span>
        </div>
      </S.ChargeInfo>
      <S.SelectPrice>
        <span>충전금액 선택</span>
      </S.SelectPrice>
      <S.Select onChange={onChangeAmount}>
        <option>1000원</option>
        <option>3000원</option>
        <option>10000원</option>
        <option>20000원</option>
        <option>30000원</option>
        <option>50000원</option>
      </S.Select>
      <S.ButtonWrapper>
        <div>
          <FullSizeButton name="취소하기" onClick={props.handleClose} />
        </div>
        <div>
          <FullSizeButton name="충전하기" onClick={onClickPayment} />
        </div>
      </S.ButtonWrapper>
    </S.ChargeModalWrapper>
  );
}
