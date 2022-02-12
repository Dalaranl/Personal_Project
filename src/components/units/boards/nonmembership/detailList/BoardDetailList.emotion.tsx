import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}

export const Wrapper = styled.div`
  width: 100%;

  padding: 10px;

  #footer {
    width: 100%;
    height: 5vh;
  }

  .text {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
export const Header = styled.div`
  width: 100%;
  height: 15vh;

  padding: 10px;

  margin-bottom: 20px;
  border-bottom: 1px solid rgb(150, 150, 150);
`;
export const HeaderTitle = styled.div`
  width: 100%;
  height: 35%;

  font-size: 2rem;
  color: rgb(245, 245, 245);
`;
export const Search = styled.div`
  width: 100%;
  height: 65%;

  display: flex;
  justify-content: start;
  align-items: center;

  input {
    width: 100%;
    height: 60%;

    padding: 20px;

    border-radius: 10px;
    border: none;

    font-size: 1.3rem;

    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.4);

    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    :focus {
      outline: none;
    }
    ::placeholder {
      color: rgb(200, 200, 200);
    }
  }
`;
export const Comments = styled.div`
  width: 100%;
  height: 12vh;

  margin-top: 10px;
  padding: 5px;

  display: flex;

  border-radius: 20px;
  background-color: rgba(150, 150, 150, 0.6);
`;
export const Profile = styled.div`
  width: 20%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;
export const ContentsInfo = styled.div`
  width: 80%;
  height: 100%;
`;
export const Top = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
`;
export const Writer = styled.div`
  width: 50%;
  height: 100%;

  margin-top: 11px;
  margin-left: 20px;

  span {
    font-size: 1.6rem;
    color: rgb(245, 245, 245);
  }
`;
export const Like = styled.div`
  width: 50%;
  height: 100%;

  font-size: 1.5rem;

  display: flex;
  div {
    font-size: 1.5rem;
    margin-top: 12px;
    color: rgb(245, 245, 245);
  }

  #heart {
    margin-top: 10px;
    margin-right: 15px;
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 50%;
`;

export const Title = styled.div`
  width: 90%;
  height: 100%;

  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  margin: 5px 0px 0px 20px;

  font-size: 1.7rem;
  color: rgb(245, 245, 245);
`;
export const TitleSpan = styled.span`
  color: ${(props: IProps) =>
    props.isMatched ? "#fe1881" : "rgb(245, 245, 245)"};
  font-size: 1.7rem;
`;
