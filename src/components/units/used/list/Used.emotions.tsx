import styled from "@emotion/styled";
import { IPropsSoldBtn, IPropsUnsoldBtn } from "./Used.types";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;

  background-color: #33363d;
`;

// 오늘 본 상품
export const TodayWrapper = styled.div`
  width: 15%;
  height: 94vh;

  padding: 20px;

  position: sticky;
  top: 0;

  background-color: #28292d;
`;
export const TodayHeader = styled.div`
  width: 100%;
  height: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: aliceblue;
    font-size: 1.5em;
  }
`;

export const TodayItemsWrapper = styled.div`
  width: 100%;
  height: 90vh;
`;

// 물품 리스트 메인
export const MainWrapper = styled.div`
  width: 85%;

  padding: 20px;
`;

export const MainHeader = styled.div`
  width: 100%;
  height: 13vh;

  display: flex;

  margin-bottom: 10px;
`;

export const HeaderR = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: end;
  align-items: flex-start;

  span {
    color: white;
    font-size: 3.5em;
  }
`;
export const HeaderL = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  span {
    color: white;
    font-size: 1.5em;
  }
`;

// best 상품
export const BestWrapper = styled.div`
  width: 100%;
  height: 45vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 상품 리스트
export const ProductListWrapper = styled.div`
  width: 100%;

  padding: 10px;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
`;

// 상품 검색
export const SearchWrapper = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Search = styled.div`
  width: 50%;
  height: 45%;

  margin: 10px 0px 10px 0px;

  display: flex;
  justify-content: end;
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 100%;
`;

export const Calender = styled.div`
  width: 35%;
  height: 45%;

  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

export const SearchBtn = styled.button`
  width: 20%;
  height: 100%;
`;

// 목록 선택 버튼
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 10vh;

  margin-top: 40px;

  position: sticky;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;

  background-color: #33363d;
`;

export const UnsoldBtn = styled.button`
  width: 15%;
  height: 80%;
  display: block;

  font-size: 1.8rem;
  color: aliceblue;

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsUnsoldBtn) =>
    props.isUnsold ? "#33363d" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;

export const SoldBtn = styled.button`
  width: 15%;
  height: 80%;
  display: block;

  font-size: 1.5rem;
  color: aliceblue;

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsSoldBtn) =>
    props.isSold ? "#33363d" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;

export const New = styled.div`
  width: 100%;
  height: 8vh;

  margin-top: 50px;

  display: flex;
  justify-content: end;
  align-items: center;

  div {
    width: 20%;
    height: 100%;
  }
`;
