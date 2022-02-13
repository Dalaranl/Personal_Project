import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 6vh;

  display: flex;

  background-color: #303136;

  #blank {
    width: 87.4%;
    height: 100%;
  }
`;
const LogInfoWrapper = styled.div`
  width: 12.6%;
  height: 100%;

  display: flex;

  div {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  button {
    width: 90%;
    height: 90%;

    border: none;
    font-size: 1rem;

    color: rgb(200, 200, 200);
    background-color: rgba(50, 50, 50, 0.5);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;

interface IProps {
  onClickCreate: () => void;
  onClickLogin: () => void;
}

export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <div id="blank"></div>
      <LogInfoWrapper>
        <div>
          <button onClick={props.onClickLogin}>로그인</button>
        </div>
        <div>
          <button onClick={props.onClickCreate}>회원가입</button>
        </div>
      </LogInfoWrapper>
    </Wrapper>
  );
}
