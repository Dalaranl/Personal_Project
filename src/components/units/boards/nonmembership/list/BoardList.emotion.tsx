import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}

// Skeleton
export const Wrapper = styled.div`
  width: 100%;
  min-width: 600px;
  min-height: 94vh;

  display: flex;
`;
export const ListBody = styled.div`
  width: 86%;
  min-width: 430px;
  min-height: 94vh;

  background-image: linear-gradient(to bottom, #a20568, #34304a, #28292d);
`;
export const ListAside = styled.div`
  width: 14%;
  min-width: 170px;
  min-height: 94vh;
  background-color: #33363d;

  z-index: 1;
`;

// Header
export const ListHeader = styled.div`
  width: 96.8%;
  height: 45vh;

  display: flex;

  padding: 20px;
  margin: 0px 20px 0px 20px;
  border-bottom: 1px solid rgb(255, 255, 255);
`;
export const ListTheme = styled.div`
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const ListInfo = styled.div`
  width: 60%;
  height: 100%;
`;
export const ListName = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: end;
  align-items: flex-end;

  padding: 20px;

  font-size: 5.5rem;
  text-shadow: 10px 10px 0 #2e2a34;
  color: #ffffff;
`;
export const ListBest = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: end;
  align-items: flex-end;

  padding: 20px;

  span {
    font-size: 3rem;
    text-shadow: 6px 6px 0 #2e2a34;
    color: #ffffff;
  }

  button {
    width: 15%;
    height: 30%;

    border: none;
    margin: 0px 30px 13px 0px;
    font-size: 1.6rem;

    border-radius: 15px;
    color: #ffffff;
    background-color: rgba(100, 100, 100);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;
// Carousel
export const ListCarousel = styled.div`
  width: 100%;
  height: 45vh;
`;

// MainBody
export const ListMain = styled.div`
  width: 100%;
  min-height: 45vh;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 5vh;

  padding: 40px;

  span {
    font-size: 2em;

    margin-right: 20px;
    color: white;
    text-shadow: 6px 6px 0 #2e2a34;
  }

  input {
    width: 26.5%;
    min-width: 26.5%;
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

export const MainList = styled.div`
  width: 100%;
  min-height: 40vh;

  padding: 0px 40px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// List Componant
export const List = styled.div`
  width: 29%;
  width: 383px;

  height: 30vh;
  padding: 10px;
  margin-top: 40px;

  border-radius: 15px;
  background-color: rgba(150, 150, 150, 0.3);
`;
export const ListThumbNail = styled.div`
  display: inline;
  width: 50%;
  height: 67%;
  padding: 10px;

  float: left;
`;
export const ThumbNail = styled.img`
  width: 100%;
  height: 100%;

  float: left;
  border-radius: 50%;
  overflow: hidden;
`;
export const ListUserInfo = styled.div`
  display: inline;
  width: 50%;
  height: 67%;

  float: right;
`;
export const ListTitle = styled.div`
  width: 100%;
  height: 28%;

  margin-top: 190px;
  padding: 0px 0px 10px 10px;

  #title {
    width: 100%;
    height: 30%;

    margin-right: 10px;
    color: #ffffff;
    font-size: 1.2rem;
  }
`;

export const ListLikeCount = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: flex-end;
  padding: 0px 0px 10px 10px;

  span {
    margin-left: 5px;
    font-size: 1.6rem;
    color: #ffffff;
  }
`;
export const ListWriter = styled.div`
  width: 100%;
  height: 40%;

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 0px 0px 10px 10px;

  color: #ffffff;

  span {
    margin-left: 5px;
    font-size: 1.6rem;
  }
`;

export const Title = styled.div`
  margin: 10px 0px 0px 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #ffffff;
`;
export const SearchTitle = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "#fe1881" : "#ffffff")};
  font-size: 1.6rem;
`;

// 페이지네이션
export const Pagination = styled.div`
  width: 100%;
  height: 20vh;
`;
