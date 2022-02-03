import styled from "@emotion/styled";

// Skeleton
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainWrapper = styled.div`
  width: 400vw;
  height: 94vh;

  position: fixed;
  left: 15vw;
  z-index: 1;
  transition: all 0.35s;

  display: flex;

  background-color: #33363d;
`;
export const Block = styled.div`
  width: 28%;
  height: 100%;
`;

// 1p 작성자 비밀번호
export const UserInfoWrapper = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
`;

export const UserInfo = styled.div`
  width: 72%;
  height: 100%;
`;
export const UserInfoHeader = styled.div`
  width: 100%;
  height: 25%;
`;
export const UserHeaderTop = styled.div`
  width: 100%;
  height: 50%;

  color: rgb(225, 225, 225);

  div {
    font-size: 5rem;
    margin-left: 20px;
  }
`;
export const UserHeaderBottom = styled.div`
  width: 100%;
  height: 50%;

  color: rgb(225, 225, 225);

  div {
    font-size: 4rem;
    margin: 10px 0px 0px 20px;
  }
`;
export const UserInfoBody = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
`;

// 1p 중단 바디
export const UserBodyLeft = styled.div`
  width: 50%;
  height: 100%;

  div {
    width: 90%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 20px;
    span {
      width: 70%;
      height: 20%;

      display: inline-block;
    }
  }
  input {
    width: 70%;
    height: 30%;

    display: inline-block;
    border-radius: 20px;
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
export const UserBodyRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 65%;
    height: 65%;
    border-radius: 50%;

    margin-bottom: 30px;
  }
`;

// 2p 제목 & 글
export const ContentsInfoWrapper = styled.div`
  width: 25%;
  height: 100%;

  padding: 20px;
`;

export const ContentsInfo = styled.div`
  width: 72%;
  height: 100%;
`;

export const CommonHeader = styled.div`
  width: 100%;
  height: 10%;

  span {
    font-size: 3.5rem;
    color: #f6f9ff;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;

  margin-top: 20px;

  input {
    width: 70%;
    height: 50%;

    display: inline-block;
    border-radius: 20px;
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

export const Contents = styled.div`
  width: 100%;
  height: 60%;

  margin-top: 20px;

  textarea {
    width: 100%;
    height: 90%;

    white-space: pre-line;

    resize: none;
    ::-webkit-scrollbar {
      height: 17%;
      border-radius: 10px;
      background-color: rgb(120, 120, 120);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #33363d;
    }

    border-radius: 15px 0px 0px 0px;
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
  div {
    width: 100%;
    height: 5%;

    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10px;

    border-radius: 0px 0px 15px 15px;

    background-color: rgba(150, 150, 150, 0.4);
    span {
      color: rgb(200, 200, 200);
    }
  }
`;

// 3p address
export const AddressWrapper = styled.div`
  width: 25%;
  height: 100%;

  padding: 20px;
`;
export const Address = styled.div`
  width: 72%;
  height: 100%;
`;
export const AddressBody = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  div {
    width: 100%;
    height: 30%;

    display: flex;
    align-items: center;
  }

  #areaNumber {
    width: 15%;
    height: 40%;

    display: inline-block;

    border-radius: 20px;
    border: none;
    padding: 20px;

    font-size: 1.4rem;
    text-align: center;

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

  button {
    width: 15%;
    height: 40%;

    border-radius: 20px;
    border: none;

    margin-left: 20px;

    font-size: 1.5rem;
    color: rgb(200, 200, 200);
    background-color: #1f2024;

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
    :active {
      box-shadow: 3px 3px -3px black;
    }
  }

  .address {
    width: 80%;
    height: 40%;

    display: inline-block;
    border-radius: 20px;
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
  }
`;

// 4p YouTube & Picture
export const UrlWrapper = styled.div`
  width: 25%;
  height: 100%;

  padding: 20px;
`;
export const Url = styled.div`
  width: 72%;
  height: 100%;
`;
export const UrlBody = styled.div`
  width: 100%;
  height: 75%;

  display: flex;

  .UrlBody {
    width: 50%;
    height: 100%;
  }
  .urlHeader {
    width: 100%;
    height: 15%;

    span {
      font-size: 3.5rem;
      color: rgb(200, 200, 200);
    }
  }
  .Url {
    width: 100%;
    height: 15%;
  }
  .UrlContents {
    width: 100%;
    height: 65%;

    padding: 20px 20px 20px 0px;

    img {
      width: 100%;
      height: 100%;

      border-radius: 15px;
    }
  }
`;

export const UrlInput = styled.input`
  width: 90%;
  height: 80%;

  border-radius: 20px;
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
`;
export const Submit = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 12%;
    height: 50%;

    border-radius: 20px;
    border: none;

    font-size: 1.5rem;
    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.4);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
    :active {
      box-shadow: 3px 3px -3px black;
    }
  }
  #cancel {
    margin-right: 3vw;
  }
`;

// 우측 Nav
export const Aside = styled.div`
  width: 15%;
  height: 100%;

  position: sticky;
  right: 0px;
  float: right;
  z-index: 3;

  background-color: #1f2024;
`;
