import styled from "@emotion/styled";
import { IQuery } from "../../../../commons/types/generated/types";

interface IProps {
  data?: Pick<IQuery, "fetchBoards">;
  className: String;
  id: String;
  pageId: Number;
}

export const Wrapper = styled.div`
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: center;

  .MinMax {
    color: #88fe0a;
    margin-top: 50px;

    border-radius: 50%;
    :hover {
      font-weight: 900;
    }
  }
  #prev,
  #next {
    margin-top: 50px;
    color: #ffffff;

    :hover {
      font-weight: 900;
    }
  }
`;
export const pageNum = styled.div`
  width: 4vh;
  height: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 45px 10px 0px 10px;
  border-radius: 50%;

  color: #ffffff;
  background-color: rgba(150, 150, 150, 0.4);
  box-shadow: 3px 3px 3px black;
  color: ${(props: IProps) =>
    props.id === props.className ? "#88fe0a" : "#FFFFFF"};

  :hover {
    background-color: rgba(150, 150, 150, 0.8);
  }
  :active {
    box-shadow: 0px 0px 0 rgb(0, 0, 0, 0.5);
  }
`;
