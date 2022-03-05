import styled from "@emotion/styled";
import { IPropsSubmitBtn } from "../../ProductDetail.types";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// 댓글 등록하기
export const NewWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
`;

export const New = styled.div`
  width: 100%;
  min-height: 10vh;

  display: flex;
`;

export const NewProfile = styled.div`
  width: 5.5vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }
`;

export const NewContents = styled.div`
  width: 92%;
  min-height: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const NewContentsInput = styled(TextareaAutosize)`
  width: 100%;

  resize: none;
  background: none;
  border: none;
  border-bottom: 1px solid gray;

  color: white;
  font-size: 1.4rem;

  ::placeholder {
    font-size: 1.4rem;
  }

  :focus {
    outline: none;
  }
`;
export const NewReContentsInput = styled(TextareaAutosize)`
  width: 100%;

  resize: none;
  background: none;
  border: none;
  border-bottom: 1px solid gray;

  color: white;
  font-size: 1.2rem;

  ::placeholder {
    font-size: 1.2rem;
  }

  :focus {
    outline: none;
  }
`;

export const NewOption = styled.div`
  width: 100%;
  height: 5vh;

  display: flex;
  justify-content: end;
`;

export const CancelBtn = styled.button`
  width: 7%;
  height: 100%;

  background-color: #33363d;
  border: none;

  font-size: 1.2rem;
  color: aliceblue;

  :hover {
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  width: 7%;
  height: 100%;

  background-color: ${(props: IPropsSubmitBtn) =>
    props.isSubmit ? "#a67dff" : "gray"};
  border: none;

  font-size: 1.2rem;
  color: aliceblue;

  :hover {
    cursor: pointer;
  }
`;
export const ReSubmitBtn = styled.button`
  width: 7%;
  height: 100%;

  background-color: ${(props: IPropsSubmitBtn) =>
    props.isSubmit ? "#a67dff" : "gray"};
  border: none;

  font-size: 1.2rem;
  color: aliceblue;

  :hover {
    cursor: pointer;
  }
`;

interface IPropsEditBtn {
  isSubmit: boolean;
}

export const EditBtn = styled.button`
  width: 7%;
  height: 100%;

  background-color: ${(props: IPropsEditBtn) =>
    props.isSubmit ? "#a67dff" : "gray"};
  border: none;

  font-size: 1.2rem;
  color: aliceblue;

  :hover {
    cursor: pointer;
  }
`;

// 댓글 목록
export const ListWrapper = styled.div`
  width: 100%;
  min-height: 10vh;

  overflow: auto;

  position: relative;
`;

export const List = styled.div`
  width: 100%;
  min-height: 10vh;

  display: flex;

  margin-bottom: 40px;
`;
export const ListProfile = styled.div`
  width: 6%;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 7px;
  margin-right: 10px;

  img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
`;

export const ListInfo = styled.div`
  width: 94%;
  min-height: 10vh;
`;
export const ListName = styled.div`
  width: 100%;
  height: 4vh;

  display: flex;
  align-items: flex-end;

  span {
    color: aliceblue;
    font-size: 1.3rem;
  }

  #createAt {
    margin-left: 20px;
    color: gray;
    font-size: 1.1rem;
  }

  #answer {
    margin-left: 20px;
    color: #4e7aff;
    font-size: 1.1rem;

    :hover {
      cursor: pointer;
    }
  }
`;
export const Name = styled.div`
  width: 80%;
  height: 100%;
`;
export const Func = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: end;
`;

export const FuncBtn = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 50%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #cdc3e8;
  }

  span {
    font-size: 1.7rem;
  }
`;

export const EditDelete = styled.div`
  width: 60%;
  height: 10vh;

  position: relative;
  top: 0px;

  background-color: black;

  div {
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: gray;
      cursor: pointer;
    }

    svg {
      width: 15%;
      height: 100%;

      color: aliceblue;
    }

    span {
      font-size: 1.1rem;
      margin-left: 20px;
    }
  }
`;

export const ListContents = styled(TextareaAutosize)`
  width: 100%;

  resize: none;
  background: none;
  border: none;

  color: white;
  font-size: 1.2rem;

  :focus {
    outline: none;
  }
`;

export const Answer = styled.div`
  width: 100%;
`;

export const RerequireAsk = styled.div`
  width: 10%;
  height: 2vh;

  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
  svg {
    width: 17%;
    height: 100%;

    color: #4e7aff;
  }

  span {
    margin-left: 5px;

    font-size: 1rem;
    color: #4e7aff;
  }
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  min-height: 5vh;
`;

export const AnswerProfile = styled.div`
  width: 5vw;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  img {
    width: 55%;
    height: 80%;
    border-radius: 50%;
  }
`;

export const AnswerBox = styled.div`
  width: 100%;
  min-height: 5vh;

  display: flex;
`;

export const AnswerContents = styled.div`
  width: 92%;
  min-height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ReInquireWrapper = styled.div`
  width: 100%;

  margin-top: 20px;
`;

export const Test = styled.div`
  width: 100%;
  min-height: 5vh;
`;

export const NoAnswer = styled.div`
  width: 100%;
  height: 3vh;

  margin-top: 10px;

  span {
    color: aliceblue;
    font-size: 1.2rem;
  }
`;
