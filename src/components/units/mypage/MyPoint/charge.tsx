import * as S from "../MyProduct/MyProduct.emotion";
import { Pagination } from "antd";
import { getMyDate } from "../../../../commons/libraries/getData";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { MyPointContext } from "./MyPoint.container";

export default function Charge() {
  const { charge, chargeRefetch, chargeCount } = useContext(MyPointContext);
  const data = charge?.fetchPointTransactionsOfLoading;

  const onChangeRefetch = (page: number) => {
    chargeRefetch && chargeRefetch({ page });
  };

  return (
    <S.ListWrapper>
      <S.ListInfo>
        <S.Point20per>
          <span>충전일</span>
        </S.Point20per>
        <S.Point40per>
          <span>결제 ID</span>
        </S.Point40per>
        <S.Point20per>
          <span>충전내역</span>
        </S.Point20per>
        <S.Point20per>
          <span>충전 후 잔액</span>
        </S.Point20per>
      </S.ListInfo>
      {data?.map((el) => (
        <S.List key={uuidv4()}>
          <S.Point20per>
            <span>{getMyDate(el.createdAt)}</span>
          </S.Point20per>
          <S.Point40per>
            <span>{el.impUid}</span>
          </S.Point40per>
          <S.Point20per>
            <span>{el.amount}</span>
          </S.Point20per>
          <S.Point20per>
            <span>{el.balance}</span>
          </S.Point20per>
        </S.List>
      ))}
      <S.PageNation>
        <Pagination
          onChange={onChangeRefetch}
          showSizeChanger={false}
          defaultPageSize={10}
          defaultCurrent={4}
          total={chargeCount?.fetchPointTransactionsCountOfLoading}
        />
      </S.PageNation>
    </S.ListWrapper>
  );
}
