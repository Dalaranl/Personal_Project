import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: url("/img/account.png") center/111%;
`;
export const WrapperDark = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
`;

export const CreateAccountWrapper = styled.div`
  width: 50%;
  height: 90%;

  padding: 50px;

  background-color: rgba(0, 0, 0, 0.85);
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 3rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 18%;

  #Header {
    width: 100%;
    height: 35%;

    display: flex;
    align-items: center;
  }

  #Body {
    width: 100%;
    height: 65%;

    input {
      width: 100%;
      height: 80%;

      background-color: rgba(80, 80, 80, 0.9);
      border-radius: 10px;

      padding: 20px;
      border: none;

      font-size: 1.4rem;
      color: white;

      :hover {
        background-color: rgba(120, 120, 120, 0.9);
      }

      :focus {
        outline: none;
      }
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  justify-content: center;
`;

export const Submit = styled.button`
  width: 30%;
  height: 50%;

  margin-top: 60px;

  border: none;
  border-radius: 10px;

  font-size: 1.6rem;
  color: white;
  background-color: #fe1881;

  :hover {
    background-color: #f21b91;
  }
`;

export const ErrorInfo = styled.span`
  font-size: 1.7rem;
  color: white;

  span {
    font-size: 1.1rem;
    color: #fe1881;
  }
`;
