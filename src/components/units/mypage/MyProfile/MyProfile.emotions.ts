import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const EditUserInfo = styled.div`
  width: 100%;
  height: 40vh;

  margin-top: 20px;

  border-bottom: 1px solid gray;
`;

export const UserInfoTitle = styled.div`
  width: 100%;
  height: 15%;

  span {
    font-size: 1.8rem;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
`;

export const Profile = styled.div`
  width: 45%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 80%;
    height: 80%;

    border-radius: 50%;
  }

  div {
    width: 80%;
    height: 80%;

    position: absolute;
    top: 34px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: rgba(0, 0, 0, 0.4);

    :hover {
      cursor: pointer;
    }

    span {
      color: antiquewhite;
      font-size: 2.5em;
      opacity: 0.9;
    }
  }
  input {
    display: none;
  }
`;

export const Info = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.div`
  width: 100%;
  height: 10%;

  margin-top: 10px;

  span {
    font-size: 1.4rem;
  }
`;

export const UserInfoInput = styled.input`
  width: 100%;
  height: 15%;

  padding: 10px;

  font-size: 1.3rem;

  border: solid rgba(50, 50, 50, 0.2);
  border-radius: 5px;

  :focus {
    outline: none;
    border: solid blueviolet;
  }
`;

export const EditPassword = styled.div`
  width: 100%;
  height: 35vh;

  margin-top: 20px;
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Password = styled.div`
  width: 100%;
  height: 20%;

  display: flex;

  div {
    width: 30%;
    height: 100%;

    display: flex;

    align-items: center;
  }

  span {
    font-size: 1.4rem;
  }

  input {
    width: 70%;
    height: 90%;

    padding: 10px;

    font-size: 1.3rem;

    border: solid rgba(50, 50, 50, 0.2);
    border-radius: 5px;

    :focus {
      outline: none;
      border: solid blueviolet;
    }
  }
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 30px;

  div {
    width: 20%;
    height: 80%;
  }
`;
