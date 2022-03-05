import * as S from "../MyProduct/MyProduct.emotion";
import { Pagination } from "antd";
import { getMyDate } from "../../../../commons/libraries/getData";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { MyPointContext } from "./MyPoint.container";

export default function Selling() {
  const { selling, sellingRefetch, sellingCount } = useContext(MyPointContext);
  const data = selling?.fetchPointTransactionsOfSelling;

  const onChangeRefetch = (page: number) => {
    sellingRefetch && sellingRefetch({ page });
  };

  return (
    <S.ListWrapper>
      <S.ListInfo>
        <S.Point20per>
          <span>거래일</span>
        </S.Point20per>
        <S.Point40per>
          <span>상품명</span>
        </S.Point40per>
        <S.Point20per>
          <span>거래내역</span>
        </S.Point20per>
        <S.Point20per>
          <span>거래 후 잔액</span>
        </S.Point20per>
      </S.ListInfo>
      {data?.map((el) => (
        <S.List key={uuidv4()}>
          <S.Point20per>
            <span>{getMyDate(el.createdAt)}</span>
          </S.Point20per>
          <S.Point40per>
            <span>{el.useditem?.name}</span>
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
          total={sellingCount?.fetchPointTransactionsCountOfSelling}
        />
      </S.PageNation>
    </S.ListWrapper>
  );
}
