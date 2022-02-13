import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background-color: #a20568;
`;
const RightWrapper = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 100%;
  }
  #top {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 80%;
      height: 70%;

      border-radius: 15px;
      margin-left: 20px;
    }
  }
`;
const MiniWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    width: 100%;
    height: 40%;

    text-align: center;

    span {
      font-size: 5rem;
      color: #ffffff;
    }
    #login {
      margin-right: 42%;
    }
  }
  #divWrapper {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  #imgWrapper {
    width: 100%;
    height: 50%;

    img {
      width: 32%;
      height: 40%;

      border-radius: 50%;

      position: relative;
      left: 8%;
    }
    div {
      width: 33%;
      height: 15%;

      position: relative;
      left: 17%;
      top: -8%;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 15px;
      background-color: #fe1881;
      span {
        font-size: 1.5rem;
        color: #ffffff;
      }
      :hover {
        transform: rotate(15deg);
      }
      transition: all 0.5s;
    }
  }
`;
const LeftWrapper = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export default function SecondPage() {
  const router = useRouter();
  const onClickMoveToBoards = () => {
    router.push("/boards/list");
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <MiniWrapper>
          <div id="divWrapper">
            <div className="text">
              <span id="login">로그인 NO</span>
            </div>
            <div className="text">
              <span>실력 자랑하고 싶어?</span>
            </div>
          </div>
          <div id="imgWrapper">
            <img src="/img/gonow.png" />
            <div onClick={onClickMoveToBoards}>
              <span>자유게시판 바로가기</span>
            </div>
          </div>
        </MiniWrapper>
      </LeftWrapper>
      <RightWrapper>
        <div id="top">
          <img src="/img/freeboardex.png" />
        </div>
      </RightWrapper>
    </Wrapper>
  );
}
