import styled from "@emotion/styled";
import {
  IPropsMyPointBtn,
  IPropsMyProductBtn,
  IPropsMyProfileBtn,
} from "./MyPage.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #33363d;
`;

export const MyPage = styled.div`
  width: 70%;
`;

export const BtnWrppaer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
export const BTN = styled.div`
  width: 70%;

  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  background-color: aliceblue;
`;
export const Title = styled.div`
  width: 100%;
  height: 30%;

  padding: 20px 30px;

  span {
    color: aliceblue;
    font-size: 3rem;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
`;

export const UserProfile = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 80%;

    border-radius: 50%;
  }
`;

export const UserStatus = styled.div`
  width: 35%;
  height: 100%;
`;

export const UserName = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-end;

  padding: 10px;

  span {
    color: aliceblue;
    font-size: 2.3rem;
  }
`;

export const UserPoint = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;

  padding: 0px 10px;

  span {
    color: aliceblue;
    font-size: 2.8rem;
  }
`;

export const UserProduct = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const SoldCount = styled.div`
  width: 50%;
  height: 70%;

  border-right: 1px solid gray;
`;

export const BuyingCount = styled.div`
  width: 50%;
  height: 70%;
`;

export const SoldName = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  span {
    color: aliceblue;
    font-size: 2rem;
  }
`;

export const BuyingName = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  span {
    color: aliceblue;
    font-size: 2rem;
  }
`;

export const Sold = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: aliceblue;
    font-size: 2rem;
  }
`;

export const Buying = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: aliceblue;
    font-size: 2rem;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  height: 6vh;

  margin-top: 20px;
`;

export const MyProfileBtn = styled.button`
  width: 33%;
  height: 100%;

  font-size: 1.5rem;
  color: ${(props: IPropsMyProfileBtn) =>
    props.isMyProfile ? "rgb(50,50,50)" : "aliceblue"};

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsMyProfileBtn) =>
    props.isMyProfile ? "aliceblue" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;
export const MyProductBtn = styled.button`
  width: 33%;
  height: 100%;

  font-size: 1.5rem;
  color: ${(props: IPropsMyProductBtn) =>
    props.isMyProduct ? "rgb(50,50,50)" : "aliceblue"};

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsMyProductBtn) =>
    props.isMyProduct ? "aliceblue" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;
export const MyPointBtn = styled.button`
  width: 34%;
  height: 100%;

  font-size: 1.5rem;
  color: ${(props: IPropsMyPointBtn) =>
    props.isMyPoint ? "rgb(50,50,50)" : "aliceblue"};

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsMyPointBtn) =>
    props.isMyPoint ? "aliceblue" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;

export const Main = styled.div`
  width: 100%;
  min-height: 50%;
  background-color: aliceblue;
`;
