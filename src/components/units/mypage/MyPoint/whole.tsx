import * as S from "../MyProduct/MyProduct.emotion";
import { Pagination } from "antd";
import { getMyDate } from "../../../../commons/libraries/getData";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { MyPointContext } from "./MyPoint.container";

export default function Whole() {
  const { whole, wholeRefetch } = useContext(MyPointContext);
  const data = whole?.fetchPointTransactions;

  const onChangeRefetch = (page: number) => {
    wholeRefetch && wholeRefetch({ page });
  };

  return (
    <S.ListWrapper>
      <S.ListInfo>
        <S.Point20per>
          <span>날짜</span>
        </S.Point20per>
        <S.Point40per>
          <span>내용</span>
        </S.Point40per>
        <S.Point20per>
          <span>거래 및 충전 내역</span>
        </S.Point20per>
        <S.Point20per>
          <span>잔액</span>
        </S.Point20per>
      </S.ListInfo>
      {data?.map((el) => (
        <S.List key={uuidv4()}>
          <S.Point20per>
            <span>{getMyDate(el.createdAt)}</span>
          </S.Point20per>
          <S.Point40per>
            <span>{el.status}</span>
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
          total={50}
        />
      </S.PageNation>
    </S.ListWrapper>
  );
}
