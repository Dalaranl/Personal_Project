import styled from "@emotion/styled";

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
  background-image: linear-gradient(
    to bottom,
    #a20568,
    #77296c,
    #4f3161,
    #34304a,
    #28292d
  );
`;
export const ListAside = styled.div`
  width: 14%;
  min-width: 170px;
  min-height: 94vh;
  background-color: #33363d;
`;

// Header
export const ListHeader = styled.div`
  width: 100%;
  height: 14vh;
`;

// Carousel
export const ListCarousel = styled.div`
  width: 100%;
  height: 35vh;
  /* padding: 20px; */
`;

// MainBody
export const ListMain = styled.div`
  width: 100%;
  min-height: 45vh;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 5vh;

  padding: 20px;

  span {
    font-size: 1.5em;

    color: white;
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

  font-size: 1.6rem;
  color: #ffffff;
`;

// 페이지네이션
export const Pagination = styled.div`
  width: 100%;
  height: 20vh;
`;
