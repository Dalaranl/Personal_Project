import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
`;
export const DetailHeader = styled.div`
  width: 100%;
  height: 7%;
  margin-top: 20px;

  display: flex;
  justify-content: start;
`;
export const Writer = styled.div`
  width: 19%;
  height: 100%;

  display: flex;
  float: left;
`;
export const WriterProfile = styled.div`
  width: 35%;
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
  margin-top: 5px;

  color: #ffffff;

  span {
    margin-left: 10px;
    font-size: 1.2rem;
  }
`;
export const CreatedAt = styled.div`
  height: 50%;
  margin: 5px 0px 0px 10px;

  color: rgb(160, 160, 160);
`;
export const Function = styled.div`
  width: 70%;
  height: 7vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Rating = styled.div`
  width: 20%;
  height: 100%;

  margin-bottom: 4px;

  display: flex;
  align-items: flex-end;
`;
export const EditDelete = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  color: rgb(120, 120, 120);

  .delete {
    margin-left: 15px;
  }
`;

// 댓글 내용
export const Contents = styled.div`
  width: 100%;

  margin-top: 10px;
  padding: 10px;

  div {
    resize: none;
    width: 100%;

    padding: 20px;
    border: none;

    border-radius: 20px;
    background-color: rgba(120, 120, 120, 0.8);

    white-space: pre-line;
    color: rgb(200, 200, 200);
    font-size: 1.3rem;

    :focus {
      outline: 1px solid rgba(80, 80, 80, 0.8);
    }
  }
`;
