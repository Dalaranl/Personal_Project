import * as S from "./Used.emotions";
import UsedBest from "./best/UsedBset";
import { Fragment, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UsedList from "./list/usedList";
import UsedSearch from "./used.search";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { UsedListContext } from "../../../../../pages/used/list";
import Today from "./today/today";
import { IUseditem } from "../../../../commons/types/generated/types";
import FullSizeButton from "../../../commons/buttons/fullSize";
import { useProductList } from "../../../commons/hooks/useProductList";
import UsedSoldoutList from "./list/usedSoldoutList";
import { IPropsUsedUI } from "./Used.types";
import { dateSearch } from "../../../../commons/libraries/dateSearch";

export default function UsedUI(props: IPropsUsedUI) {
  const { data, isSold, setIsDateSearchMore } = useContext(UsedListContext);
  const { onClickMoveToNew } = useProductList();
  const [today, setToday] = useState([]);
  const { RangePicker } = DatePicker;

  useEffect(() => {
    setToday(JSON.parse(sessionStorage.getItem("basket") || "[]"));
  }, []);

  return (
    <S.Wrapper>
      <S.TodayWrapper>
        <S.TodayHeader>
          <span>오늘 본 상품</span>
        </S.TodayHeader>
        <S.TodayItemsWrapper>
          {today.map((item: IUseditem) => (
            <Fragment key={uuidv4()}>
              <Today item={item} />
            </Fragment>
          ))}
        </S.TodayItemsWrapper>
      </S.TodayWrapper>
      <S.MainWrapper>
        <S.MainHeader>
          <S.HeaderL>
            <span>베스트 상품</span>
          </S.HeaderL>
          <S.HeaderR>
            <span>중고마켓</span>
          </S.HeaderR>
        </S.MainHeader>
        <S.BestWrapper>
          {props.data?.fetchUseditemsOfTheBest.map((item) => (
            <Fragment key={uuidv4()}>
              <UsedBest item={item} />
            </Fragment>
          ))}
        </S.BestWrapper>
        <S.New>
          <div>
            <FullSizeButton name="상품 등록" onClick={onClickMoveToNew} />
          </div>
        </S.New>
        <S.ButtonWrapper>
          <S.UnsoldBtn isSold={isSold} onClick={props.onClickIsSold}>
            판매중
          </S.UnsoldBtn>
          <S.SoldBtn isSold={isSold} onClick={props.onClickIsSold}>
            판매 완료
          </S.SoldBtn>
          <S.SearchWrapper>
            <S.Calender>
              <Space direction="vertical" size={12}>
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                  }}
                  onChange={props.onChangeGetDate}
                />
              </Space>
            </S.Calender>
            <UsedSearch />
          </S.SearchWrapper>
        </S.ButtonWrapper>
        <S.ProductListWrapper>
          {!isSold && (
            <>
              {props.isDate &&
                data?.fetchUseditems.map((items) =>
                  dateSearch(items.createdAt, props.start, props.end) ? (
                    <Fragment key={uuidv4()}>
                      {setIsDateSearchMore && setIsDateSearchMore(true)}
                      <UsedList items={items} />
                    </Fragment>
                  ) : (
                    setIsDateSearchMore && setIsDateSearchMore(false)
                  )
                )}
              {!props.isDate &&
                data?.fetchUseditems.map((items) => (
                  <Fragment key={uuidv4()}>
                    <UsedList items={items} />
                  </Fragment>
                ))}
            </>
          )}
          {isSold && (
            <>
              {props.isDate &&
                data?.fetchUseditems.map((items) =>
                  dateSearch(items.createdAt, props.start, props.end) ? (
                    <Fragment key={uuidv4()}>
                      {setIsDateSearchMore && setIsDateSearchMore(true)}
                      <UsedList items={items} />
                    </Fragment>
                  ) : (
                    setIsDateSearchMore && setIsDateSearchMore(false)
                  )
                )}
              {!props.isDate &&
                data?.fetchUseditems.map((items) => (
                  <Fragment key={uuidv4()}>
                    <UsedSoldoutList items={items} />
                  </Fragment>
                ))}
            </>
          )}
        </S.ProductListWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
