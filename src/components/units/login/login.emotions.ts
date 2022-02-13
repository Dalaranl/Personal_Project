import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("/img/login.png") center/111%;
`;

export const LoginWrapper = styled.div`
  width: 40%;
  height: 90%;

  padding: 30px;

  background-color: rgba(0, 0, 0, 0.85);
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  span {
    color: white;
    font-size: 3rem;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 18%;

  .Header {
    width: 100%;
    height: 35%;

    display: flex;
    align-items: center;
  }

  .Body {
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

export const ErrorInfo = styled.span`
  font-size: 1.7rem;
  color: white;

  span {
    font-size: 1.1rem;
    color: #fe1881;

    :hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  height: 5%;

  display: flex;

  #loged {
    width: 35%;
    height: 100%;
  }

  #new {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    color: white;
    font-size: 1.2rem;

    :hover {
      color: #fe1881;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  height: 9%;

  margin-top: 20px;
  margin-bottom: 20px;

  border-radius: 10px;

  button {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 10px;

    font-size: 1.6rem;
    color: white;
    background-color: #fe1881;

    :hover {
      background-color: #f21b91;
    }
  }
`;

export const SocialWrapper = styled.div`
  width: 100%;
  height: 30%;
`;

export const SocailHeader = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid white;

  span {
    color: white;
    font-size: 1.5rem;
  }
`;
