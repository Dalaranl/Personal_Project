import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  background-color: #121119;

  #result {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 40vh;

  margin-bottom: 20px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;
export const History = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3rem;
    color: white;
  }
`;

export const Function = styled.div`
  width: 100%;
  height: 50%;

  .functionWrapper {
    width: 100%;
    height: 33%;

    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: end;

  button {
    width: 15%;
    height: 100%;

    border: none;

    font-size: 1.2rem;
    color: rgb(225, 225, 225);
    background-color: rgba(150, 150, 150, 0.8);

    :hover {
      background-color: #1f2024;
    }
    :active {
      box-shadow: 3px 3px -3px black;
    }
  }

  select {
    text-align: center;
    border: none;

    font-size: 1.2rem;

    color: rgb(225, 225, 225);
    background-color: rgba(150, 150, 150, 0.8);

    :hover {
      background-color: #1f2024;
    }
    :focus {
      outline: none;
    }
  }

  input {
    width: 75%;
    height: 100%;

    font-size: 1.5rem;

    border: none;
    padding: 20px;

    font-size: 1.4rem;

    color: rgb(200, 200, 200);
    background-color: rgba(120, 120, 120, 0.8);
    :hover {
      background-color: rgb(120, 120, 120);
    }
    :focus {
      outline: none;
    }
    ::placeholder {
      color: rgb(200, 200, 200);
    }
  }
`;
export const RsultImg = styled.img`
  width: 100%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`;
