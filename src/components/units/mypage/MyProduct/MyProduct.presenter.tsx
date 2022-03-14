import { IPropsMyProductUI } from "../MyPage.types";
import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/getData";
import { Pagination } from "antd";
import * as S from "./MyProduct.emotion";

export function MyProductUI(props: IPropsMyProductUI) {
  const sold = props.sold?.fetchUseditemsISold;
  const bought = props.bought?.fetchUseditemsIBought;
  const picked = props.picked?.fetchUseditemsIPicked;

  return (
    <S.Wrapper>
      <S.MainNav>
        <S.MyProduct onClick={props.onClickIsSold}>
          <span>판매 상품</span>
        </S.MyProduct>
        <S.MyProduct onClick={props.onClickIsBought}>
          <span>구매 상품</span>
        </S.MyProduct>
        <S.MyPick onClick={props.onClickIsPicked}>
          <span>찜 목록</span>
        </S.MyPick>
        <S.Search>
          <S.SearchInput
            placeholder="검색"
            onChange={props.onChangeSearch}
            value={props.search}
          />
        </S.Search>
      </S.MainNav>
      <S.ListInfo>
        <S.Number>
          <span>번호</span>
        </S.Number>
        <S.Name>
          <span>상품명</span>
        </S.Name>
        <S.Price>
          <span>가격</span>
        </S.Price>
        <S.Date>
          <span>날짜</span>
        </S.Date>
      </S.ListInfo>
      {props.isSold && (
        <S.ListWrapper>
          {sold?.map((item, i) => (
            <S.List key={uuidv4()}>
              <S.Number>
                <span>{i + 1}</span>
              </S.Number>
              <S.Name>
                <span>{item.name}</span>
              </S.Name>
              <S.Price>
                <span>{item.price}</span>
              </S.Price>
              <S.Date>
                <span>{getMyDate(item.createdAt)}</span>
              </S.Date>
            </S.List>
          ))}
          <S.PageNation>
            <Pagination
              onChange={props.onChangeSoldPage}
              showSizeChanger={false}
              defaultPageSize={10}
              defaultCurrent={1}
              total={500}
            />
          </S.PageNation>
        </S.ListWrapper>
      )}
      {props.isBought && (
        <S.ListWrapper>
          {bought?.map((item, i) => (
            <S.List key={uuidv4()}>
              <S.Number>
                <span>{i + 1}</span>
              </S.Number>
              <S.Name>
                <span>{item.name}</span>
              </S.Name>
              <S.Price>
                <span>{item.price}</span>
              </S.Price>
              <S.Date>
                <span>{getMyDate(item.createdAt)}</span>
              </S.Date>
            </S.List>
          ))}
          <S.PageNation>
            <Pagination
              onChange={props.onChangeBoughtPage}
              showSizeChanger={false}
              defaultPageSize={10}
              defaultCurrent={4}
              total={props.boughtCount}
            />
          </S.PageNation>
        </S.ListWrapper>
      )}
      {props.isPicked && (
        <S.ListWrapper>
          {picked?.map((item, i) => (
            <S.List key={uuidv4()}>
              <S.Number>
                <span>{i + 1}</span>
              </S.Number>
              <S.Name>
                <span>{item.name}</span>
              </S.Name>
              <S.Price>
                <span>{item.price}</span>
              </S.Price>
              <S.Date>
                <span>{getMyDate(item.createdAt)}</span>
              </S.Date>
            </S.List>
          ))}
          <S.PageNation>
            <Pagination
              onChange={props.onChangePickedPage}
              showSizeChanger={false}
              defaultPageSize={10}
              defaultCurrent={4}
              total={props.pickedCount}
            />
          </S.PageNation>
        </S.ListWrapper>
      )}
    </S.Wrapper>
  );
}
