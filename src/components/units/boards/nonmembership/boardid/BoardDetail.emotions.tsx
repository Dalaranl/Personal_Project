import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 1600px;
  min-height: 94vh;
  /* display: flex; */
`;

export const LeftSide = styled.div`
  width: 30vw;
  min-height: 94vh;

  float: left;

  background-image: linear-gradient(
    to bottom,
    #a20568,
    #77296c,
    #4f3161,
    #34304a,
    #28292d
  );
`;

// 상세 페이지
export const RightSide = styled.div`
  width: 54vw;
  min-height: 94vh;
  padding: 20px;

  float: right;
  background-color: #303136;
`;

// 상단 설명
export const DetailHeader = styled.div`
  width: 100%;
  height: 7%;

  position: sticky;
  top: 0px;
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
    margin-top: 20px;
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
  height: 30%;

  display: flex;

  margin-top: 20px;
`;
export const ContentsImage = styled.div`
  width: 30%;
  height: 100%;

  padding: 10px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 15px;
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
