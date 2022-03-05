import styled from "@emotion/styled";

export const UsedBestWrapper = styled.div`
  width: 24%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
export const BestCardWrapper = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  background-color: #28292d;
`;

export const BestCardHeader = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
`;

export const ProfileImg = styled.div`
  width: 21%;
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

export const ProfileName = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  align-items: center;

  span {
    color: white;
    font-size: 1.5em;
  }
`;

export const Pick = styled.div`
  width: 30%;
  height: 100%;

  display: flex;

  div {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 80%;
      height: 80%;

      color: #fe1881;
    }

    span {
      color: white;
      font-size: 1.3em;
    }
  }
`;

export const MainImg = styled.div`
  width: 100%;
  height: 65%;

  position: relative;
  overflow: hidden;

  z-index: 1;

  img {
    width: 100%;
    height: 100%;

    display: block;
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

export const Pickimg = styled.div`
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

export const InfoWrapper = styled.div`
  width: 100%;
  height: 23%;

  .TopBottom {
    height: 40%;

    margin-left: 10px;
    margin-top: 2px;

    span {
      color: white;
      font-size: 1.5em;
    }

    #pricecolor {
      color: skyblue;
    }
  }
  #middle {
    height: 20%;

    margin-left: 10px;

    color: antiquewhite;
  }
`;
