import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: url("/img/mainTheme.gif") center/100%;
  opacity: 0.8;

  .TopWrapper {
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .BottomWrapper {
    width: 100%;
    height: 50%;
  }

  #title {
    width: 50%;
    height: 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @keyframes scroll {
    50% {
      font-size: 3rem;
    }
  }

  #button {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      height: 20%;
      background: transparent;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: rgba(255, 255, 255, 0.8);
        font-size: 2rem;
        animation: scroll 3s infinite;
      }
    }
  }
`;

export default function FistPage() {
  return (
    <Wrapper>
      <div className="TopWrapper">
        <div id="title">
          <span>Muse Dash!!</span>
        </div>
      </div>
      <div className="BottomWrapper">
        <div id="button">
          <div>
            <span>Scroll ⏚</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
