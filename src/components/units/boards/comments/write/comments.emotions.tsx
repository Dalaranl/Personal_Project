import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 11vw;

  margin-top: 20px;

  border-bottom: 1px solid rgb(80, 80, 80);
`;
export const Header = styled.div`
  width: 100%;
  height: 40px;

  span {
    font-size: 1.6rem;
    margin-left: 10px;

    color: #ffffff;
  }
`;
export const WriterInfo = styled.div`
  width: 100%;
  height: 65.28px;

  display: flex;

  margin-top: 5px;
`;
export const Profile = styled.div`
  width: 8%;
  height: 100%;

  margin-left: 10px;

  img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }
`;
export const WriterInput = styled.div`
  width: 77%;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  input {
    width: 20%;
    height: 68%;

    padding: 20px;
    margin: 0px 10px 0px 5px;
    border-radius: 20px;
    border: none;

    font-size: 1.3rem;

    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.8);

    :hover {
      background-color: rgba(120, 120, 120, 0.8);
    }
    :focus {
      outline: 1px solid rgba(80, 80, 80, 0.8);
    }
    ::placeholder {
      color: rgb(200, 200, 200);
    }
  }
`;
export const Submit = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: end;
  align-items: center;

  button {
    width: 100%;
    height: 70%;

    margin-right: 10px;
    border-radius: 20px;
    border: none;

    font-size: 1.3rem;
    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.4);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
    :active {
      box-shadow: 3px 3px -3px black;
    }
  }
`;
export const MainContents = styled.div`
  width: 100%;
  min-height: 65.344px;

  padding: 10px;

  textarea {
    width: 100%;

    resize: none;
    border-radius: 20px;
    border: none;
    padding: 20px;

    overflow-y: hidden;

    font-size: 1.3rem;

    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.8);

    :hover {
      background-color: rgba(120, 120, 120, 0.8);
    }
    :focus {
      outline: 1px solid rgba(80, 80, 80, 0.8);
    }
    ::placeholder {
      color: rgb(200, 200, 200);
    }
  }
`;
