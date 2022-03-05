import * as S from "./Used.emotions";
import UsedBest from "./best/UsedBset";
import { Fragment, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UsedList from "./list/usedList";
import UsedSearch from "./used.search";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { UsedListContext } from "../../../../../pages/used/list";
import { getMyDate } from "../../../../commons/libraries/getData";
import Today from "./today/today";
import { IUseditem } from "../../../../commons/types/generated/types";
import FullSizeButton from "../../../commons/buttons/fullSize";
import { useProductList } from "../../../commons/hooks/useProductList";
import UsedSoldoutList from "./list/usedSoldoutList";
import { IPropsUsedUI } from "./Used.types";

export default function UsedUI(props: IPropsUsedUI) {
  const { data, setIsSold, setIsUnsold, isSold, isUnsold, dataSoldout } =
    useContext(UsedListContext);
  const { onClickMoveToNew } = useProductList();
  const [today, setToday] = useState([]);
  const { RangePicker } = DatePicker;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [isDate, setIsDate] = useState(false);

  useEffect(() => {
    setToday(JSON.parse(sessionStorage.getItem("basket") || "[]"));
  }, []);

  function onChange(dates: any) {
    if (!dates) {
      setIsDate(false);
      return;
    }

    setIsDate(true);
    setStart(Number(getMyDate(dates[0]).split(".").join("")));
    setEnd(Number(getMyDate(dates[1]).split(".").join("")));
  }

  const onClickIsUnsold = () => {
    if (!setIsSold || !setIsUnsold) return;
    setIsUnsold(true);
    setIsSold(false);
  };
  const onClickIsSold = () => {
    if (!setIsSold || !setIsUnsold) return;
    setIsSold(true);
    setIsUnsold(false);
  };

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
          <S.UnsoldBtn isUnsold={isUnsold} onClick={onClickIsUnsold}>
            판매중
          </S.UnsoldBtn>
          <S.SoldBtn isSold={isSold} onClick={onClickIsSold}>
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
                  onChange={onChange}
                />
              </Space>
            </S.Calender>
            <UsedSearch />
          </S.SearchWrapper>
        </S.ButtonWrapper>
        <S.ProductListWrapper>
          {isUnsold && (
            <>
              {start &&
                data &&
                data?.fetchUseditems.map(
                  (items) =>
                    Number(items.createdAt.split("-").join("")) <= end &&
                    Number(items.createdAt.split("-").join("")) >= start && (
                      <Fragment key={uuidv4()}>
                        <UsedList items={items} />
                      </Fragment>
                    )
                )}
              {!isDate &&
                data?.fetchUseditems.map((items) => (
                  <Fragment key={uuidv4()}>
                    <UsedList items={items} />
                  </Fragment>
                ))}
            </>
          )}
          {isSold && (
            <>
              {isDate &&
                dataSoldout?.fetchUseditems.map(
                  (items) =>
                    Number((items?.createdAt).split("-").join("")) <= end &&
                    Number((items?.createdAt).split("-").join("")) >= start && (
                      <Fragment key={uuidv4()}>
                        <UsedSoldoutList items={items} />
                      </Fragment>
                    )
                )}
              {!isDate &&
                dataSoldout &&
                dataSoldout?.fetchUseditems.map((items) => (
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
