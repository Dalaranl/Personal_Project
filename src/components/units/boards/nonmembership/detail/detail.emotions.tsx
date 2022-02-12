import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  #footer {
    width: 100%;
    height: 5vh;
  }
`;

export const MoveToTop = styled.div`
  width: 5vh;
  height: 5vh;

  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  right: 0.5px;
`;

// 상단 설명
export const DetailHeader = styled.div`
  width: 100%;
  min-height: 10vh;

  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: #303136;
`;
export const Writer = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  float: left;
`;
export const WriterProfile = styled.div`
  width: 25%;
  height: 100%;

  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 90%;
    border-radius: 50%;
  }
`;
export const WriterInfo = styled.div`
  width: 75%;
  height: 100%;
`;
export const Name = styled.div`
  height: 35%;
  margin-top: 10px;

  color: #ffffff;

  span {
    margin-left: 10px;

    font-size: 1.3rem;
  }
`;
export const CreatedAt = styled.div`
  height: 50%;
  margin: 5px 0px 0px 10px;

  color: rgb(160, 160, 160);
`;
export const ContentsInfo = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  justify-content: end;
`;
export const HeaderBTN = styled.button`
  width: 15%;
  height: 50%;

  margin: 20px 35px 0px 0px;

  border: none;
  border-radius: 30px;

  color: rgb(200, 200, 200);
  background-color: rgba(150, 150, 150, 0.4);

  :hover {
    background-color: rgba(150, 150, 150, 0.8);
  }
`;
export const ContentsLike = styled.div`
  width: 15%;
  height: 100%;

  border-left: 1px solid rgb(80, 80, 80);
`;
export const HeaderText = styled.div`
  width: 100%;
  height: 35%;

  margin-top: 10px;
  text-align: center;

  color: #ffffff;
`;
export const HeaderNum = styled.div`
  width: 100%;
  height: 50%;

  margin-top: 5px;
  text-align: center;

  color: rgb(150, 150, 150);
`;
export const RatingText = styled.div`
  width: 15%;
  height: 100%;

  border-left: 1px solid rgb(80, 80, 80);
`;

// 메인글
export const MainContents = styled.div`
  width: 100%;
  min-height: 30%;

  display: flex;

  margin-top: 20px;
`;
export const ContentsImage = styled.div`
  width: 50%;
  height: 100%;

  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 100%;

    border-radius: 15px;
  }

  svg {
    width: 15%;
    height: 70%;

    color: white;

    :hover {
      color: #88fe0a;
    }
  }
`;
export const ContentsTitle = styled.div`
  width: 60%;
  height: 100%;

  padding: 15px;
`;
export const ContentsTitleTop = styled.div`
  width: 100%;
  height: 50%;
`;
export const ContentsTitleBottom = styled.div`
  width: 100%;
  height: 50%;
`;
export const TitleHeader = styled.div`
  width: 100%;
  height: 40%;

  font-size: 2rem;
  margin-top: 40px;

  color: #ffffff;
`;
export const Title = styled.div`
  width: 100%;
  height: 40%;

  font-size: 2rem;

  color: rgb(160, 160, 160);
`;
export const DivideLine = styled.div`
  width: 100%;
  height: 3%;
  border-bottom: 1px solid rgb(80, 80, 80);
`;
export const TextArea = styled.div`
  width: 100%;
  min-height: 30%;

  white-space: pre-line;
  margin-top: 15px;
  padding: 10px;

  color: rgb(160, 160, 160);
  font-size: 1.5rem;
`;
export const Youtube = styled.div`
  width: 100%;
  height: 3%;

  display: flex;
  justify-content: center;
  margin: 30px 0px 30px 0px;
`;
export const YoubuteBTN = styled.div`
  width: 10%;
  height: 100%;

  border: none;
  border-radius: 30px;
  text-align: center;

  color: rgb(200, 200, 200);
  background-color: rgba(150, 150, 150, 0.4);

  :hover {
    background-color: rgba(150, 150, 150, 0.8);
  }
`;
export const YoutubeMain = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;
`;
export const LikeDislike = styled.div`
  width: 100%;
  height: 7vh;

  display: flex;
  justify-content: center;

  .like {
    margin-right: 20px;
  }
  .dislikd {
    margin-left: 20px;
  }

  svg {
    width: 75%;
    height: 75%;

    margin-top: 7px;
  }
  div {
    display: inline;

    width: 60%;
    height: 60%;
    margin-bottom: 100px;

    font-size: 1.5rem;
  }

  button {
    width: 5%;
    height: 65%;

    border: none;
    border-radius: 50%;

    color: rgb(200, 200, 200);
    background-color: rgba(150, 150, 150, 0.4);

    :hover {
      background-color: rgba(150, 150, 150, 0.8);
    }
  }
`;

// 댓글
export const CommentsWrapper = styled.div`
  width: 100%;
`;
