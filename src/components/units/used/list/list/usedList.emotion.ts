import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 31.5%;
  height: 60vh;

  margin-bottom: 28px;

  border-radius: 15px;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  height: 55%;

  position: relative;
  overflow: hidden;

  z-index: 1;

  img {
    width: 100%;
    height: 100%;

    display: block;

    border-radius: 15px 15px 0px 0px;
  }

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
    transition: all 0.3s ease;
  }

  .NoImage {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0px 0px;

    background-color: rgba(0, 0, 0, 0.4);

    span {
      color: antiquewhite;
      font-size: 2.5em;
      opacity: 0.5;
    }
  }

  &.isHover:after {
    transform: translateY(0%);
  }
`;

export const Pick = styled.div`
  width: 40%;
  height: 20%;

  z-index: 2;

  position: absolute;
  left: 49%;
  top: 150%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background: rgba(0, 0, 0, 0.25);

  transition: all 0.5s ease;

  :hover {
    background: rgba(150, 150, 150, 0.8);
    transition: all 0.3s ease;
  }

  svg {
    width: 20%;
    height: 50%;

    color: #fe1881;
  }

  span {
    font-size: 1.2rem;
    color: aliceblue;

    margin-left: 15px;
  }
`;

export const Basket = styled.div`
  width: 30%;
  height: 20%;

  z-index: 2;

  position: absolute;
  left: 13%;
  top: 120%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background: rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease;

  :hover {
    background: rgba(150, 150, 150, 0.8);
  }

  svg {
    width: 35%;
    height: 50%;

    color: white;
  }

  span {
    font-size: 1.2rem;
    color: aliceblue;

    margin-left: 15px;
  }
`;

export const WordWrapper = styled.div`
  width: 100%;
  height: 38%;

  :hover {
    cursor: pointer;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  align-items: center;

  padding: 5px;

  span {
    font-size: 1.4rem;
    color: aliceblue;

    margin-left: 13px;
  }
`;

export const Profile = styled.div`
  width: 9%;
  height: 70%;

  margin-left: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const NameWrapper = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    color: aliceblue;

    margin-left: 10px;
  }
`;
export const RemarkWrapper = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;

  span {
    font-size: 1.4rem;
    color: aliceblue;

    margin-left: 13px;
  }
`;
export const TagWrapper = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  align-items: center;

  span {
    font-size: 1.4rem;
    color: aliceblue;

    margin-left: 10px;
  }
`;
export const PriceWrapper = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  align-items: center;

  border-radius: 0px 0px 15px 15px;

  span {
    font-size: 2rem;
    color: skyblue;

    margin-left: 13px;
  }
`;
