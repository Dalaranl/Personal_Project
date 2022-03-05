import styled from "@emotion/styled";

// skeleton
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;
`;
export const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;

  span {
    color: aliceblue;
    font-size: 3.5em;
  }
`;
export const BodyWrapper = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  width: 70%;
  height: 100%;

  .bodyDivide {
    width: 100%;
    height: 25%;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
`;
export const Footer = styled.div`
  width: 80%;
  height: 100%;
`;

// 1p
export const BodyHeader = styled.div`
  width: 100%;
  height: 38%;

  display: flex;
  align-items: flex-end;

  span {
    font-size: 1.8em;
    color: white;
  }
`;
export const BodyMain = styled.div`
  width: 100%;
  height: 62%;

  display: flex;
  align-items: flex-start;

  .input {
    width: 100%;
    height: 70%;

    display: flex;
  }
`;

export const BodyTagWrapper = styled.div`
  width: 100%;
  height: 70%;

  border-radius: 10px;

  display: flex;

  background-color: rgba(120, 120, 120, 0.9);
`;

export const Tag = styled.div`
  max-width: 100%;
  height: 100%;

  border-radius: 10px 0px 0px 10px;

  background-color: rgba(120, 120, 120, 0.9);

  :hover {
    cursor: pointer;
  }
`;

export const TagBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: 10px;

  div {
    height: 70%;

    margin-left: 10px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    background-color: #e3e3ff;
  }

  span {
    color: #fe1881;

    white-space: nowrap;
    font-size: 1.2rem;
  }
`;

export const TagInput = styled.input`
  width: 100%;
  height: 100%;

  background-color: rgba(120, 120, 120, 0.9);
  border-radius: 0px 10px 10px 0px;

  padding: 20px;
  border: none;

  font-size: 1.5rem;
  color: white;

  :hover {
    background-color: rgba(80, 80, 80, 0.9);
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    color: aliceblue;
  }
`;

// 2p
export const ContentsHeader = styled.div`
  width: 100%;
  height: 8%;

  span {
    font-size: 2em;
    color: white;
  }
`;
export const ContentsBody = styled.div`
  width: 100%;
  height: 80%;

  background-color: aliceblue;

  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
`;

// 3p
export const ThirdWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const ThirdHeader = styled.div`
  width: 100%;
  height: 20%;

  margin-top: 70px;

  display: flex;
  align-items: center;

  span {
    color: aliceblue;
    font-size: 3rem;
  }
`;

export const MapWrapper = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid gray;
  padding: 20px;
`;

export const KakaoWraper = styled.div`
  width: 100%;
  height: 100%;

  span {
    display: block;

    color: aliceblue;
    font-size: 1.2rem;

    margin-top: 10px;
  }
`;

export const KakaoBtn = styled.div`
  width: 40%;
  height: 10%;

  margin-top: 10px;
`;

export const Map = styled.div`
  width: 100%;
  height: 77.5%;
`;

export const AddressWrapper = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 20px;
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  margin-top: 40px;
`;

export const Zipcode = styled.div`
  width: 30%;
  height: 100%;
`;
export const SearchZipcode = styled.div`
  width: 20%;
  height: 100%;

  margin-left: 20px;
`;

export const Address = styled.div`
  width: 100%;
  height: 10%;

  margin-top: 30px;
`;

// 4p
export const PictureHeader = styled.div`
  width: 100%;
  height: 8%;

  span {
    font-size: 2em;
    color: white;
  }

  input {
    display: none;
  }
`;
export const PicturesWrapper = styled.div`
  width: 100%;
  height: 92%;

  display: flex;
  flex-wrap: wrap;
`;

export const Pictures = styled.div`
  width: 33%;
  height: 50%;

  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.8);

    :hover {
      cursor: pointer;
    }

    span {
      color: antiquewhite;
      font-size: 2.5em;
      opacity: 0.5;
    }
  }
`;
