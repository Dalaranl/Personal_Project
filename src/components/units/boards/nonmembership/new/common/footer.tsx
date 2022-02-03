import styled from "@emotion/styled";
// import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 15%;
`;
const InfoFooter = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  #prev {
    margin-right: 40px;
  }
  #next {
    margin-left: 40px;
  }

  #prevWrapper,
  #nextWrapper {
    width: 30%;
    height: 100%;

    display: flex;
    justify-content: center;
  }
  .side {
    width: 20%;
    height: 100%;
    padding: 0px 20px 0px 20px;
  }

  button {
    width: 35%;
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
    width: 60%;
    float: right;
  }
  #start {
    width: 60%;
    float: left;
  }
`;

interface IProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickReset: () => void;
}

export default function Footer(props: IProps) {
  return (
    <Wrapper>
      <InfoFooter>
        <div className="side">
          <button id="start" onClick={props.onClickReset}>
            다시작성
          </button>
        </div>
        <div id="prevWrapper">
          <button id="prev" onClick={props.onClickPrevPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>{" "}
            이전
          </button>
        </div>

        <div id="nextWrapper">
          <button id="next" onClick={props.onClickNextPage}>
            다음{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </button>
        </div>
        <div className="side">
          <button id="cancel">취소하기</button>
        </div>
      </InfoFooter>
    </Wrapper>
  );
}
