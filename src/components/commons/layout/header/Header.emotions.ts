import styled from "@emotion/styled";
import { BsCoin } from "react-icons/Bs";

export const Wrapper = styled.div`
  width: 100vw;
  height: 6vh;

  display: flex;

  background-color: #303136;

  #blank {
    width: 87.4%;
    height: 100%;
  }

  #login {
    width: 80%;
    height: 100%;
  }
`;
export const LogInfoWrapper = styled.div`
  width: 12.6%;
  height: 100%;

  display: flex;

  div {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  button {
    width: 90%;
    height: 90%;

    border: none;
    font-size: 1rem;

    color: rgb(200, 200, 200);
    background-color: rgba(50, 50, 50, 0.5);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;

export const LoginWrapper = styled.div`
  min-width: 30%;
  height: 100%;

  display: flex;
`;

export const Profile = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 55%;
    height: 70%;

    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  span {
    margin-top: 5px;

    color: white;
    font-size: 1.2rem;
  }
`;

export const UserPoint = styled.div`
  min-width: 30%;
  height: 100%;

  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    margin-top: 3px;

    font-size: 1.2rem;
    color: white;
  }
`;
export const Icon = styled(BsCoin)`
  width: 12%;
  height: 100%;

  color: white;
`;

export const ChargeWrapper = styled.div`
  width: 18%;
  height: 100%;

  margin-right: 10px;

  button {
    width: 100%;
    height: 100%;

    border: none;
    font-size: 1.2rem;

    color: rgb(200, 200, 200);
    background-color: rgba(50, 50, 50, 0.5);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;

export const Logout = styled.div`
  width: 18%;
  height: 100%;

  button {
    width: 100%;
    height: 100%;

    border: none;
    font-size: 1rem;

    color: rgb(200, 200, 200);
    background-color: rgba(0, 0, 0, 0.5);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;

// 충전 모달
export const ChargeModalWrapper = styled.div`
  width: 100%;
  height: 80%;

  background-color: #33363d;
`;

export const ChargeHeader = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 2px solid gray;

  span {
    color: aliceblue;
    font-size: 2.2rem;
  }
`;

export const ChargeInfo = styled.div`
  width: 100%;
  height: 35%;

  margin-top: 10px;

  background-color: #1f2024;

  div {
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;

    color: aliceblue;
    font-size: 1.3rem;
  }

  .name {
    width: 30%;
    height: 100%;

    margin-left: 10px;
  }

  span {
    margin-left: 20px;
    float: right;

    color: aliceblue;
    font-size: 1.3rem;
  }
`;

export const SelectPrice = styled.div`
  width: 100%;
  height: 10%;

  margin-top: 20px;

  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
    color: aliceblue;
  }
`;

export const Select = styled.select`
  width: 30%;
  height: 10%;

  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 40px;

  display: flex;
  justify-content: space-evenly;

  div {
    width: 30%;
    height: 100%;
  }
`;
