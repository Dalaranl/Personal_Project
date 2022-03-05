import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 22%;

  margin-top: 10px;

  overflow: hidden;
`;
export const TodayFunction = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
  top: -206%;
  left: 0;

  transition: all 0.3s ease;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Move = styled.div`
  width: 60%;
  height: 20%;

  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  span {
    color: aliceblue;
    font-size: 1.2rem;
  }

  :hover {
    background-color: rgba(100, 100, 100, 0.6);
  }
`;

export const Delete = styled.div`
  width: 60%;
  height: 20%;

  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  span {
    color: aliceblue;
    font-size: 1.2rem;
  }

  :hover {
    background-color: rgba(100, 100, 100, 0.6);
  }
`;

export const TodayWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  margin-top: 10px;
`;

export const Image = styled.div`
  width: 100%;
  height: 65%;
  background-color: aliceblue;
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

    background-color: rgba(0, 0, 0, 0.4);

    span {
      color: antiquewhite;
      font-size: 1.3em;
      opacity: 0.5;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 35%;

  background-color: #33364d;
`;

export const Title = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;

  span {
    color: aliceblue;
    font-size: 1.3rem;

    margin: 5px 0px 0px 5px;
  }
`;
export const Price = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;

  span {
    color: aliceblue;
    font-size: 1rem;

    margin-left: 5px;
  }
`;
