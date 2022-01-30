import * as S from "./BoardDetail.emotions";
import { IPropsBoardDetailUi } from "./BoardDetail.types";
import { getMyDate } from "../../../../../commons/libraries/getData";
import ReactPlayer from "react-player";

// import { Rate } from "antd";
// import { HeartOutlined } from "@ant-design/icons";
// <Rate character={<HeartOutlined />} allowHalf />
export default function BoardDetailUi(props: IPropsBoardDetailUi) {
  return (
    <S.Wrapper>
      <S.LeftSide></S.LeftSide>
      <S.RightSide>
        <S.DetailHeader>
          <S.Writer>
            <S.WriterProfile>
              <img src="/img/nyangcat.jpeg" />
            </S.WriterProfile>
            <S.WriterInfo>
              <S.Name>
                <span>{props.data?.fetchBoard?.writer}</span>
              </S.Name>
              <S.CreatedAt>
                {getMyDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.WriterInfo>
          </S.Writer>
          <S.ContentsInfo>
            <S.HeaderBTN>글쓰기</S.HeaderBTN>
            <S.HeaderBTN>수정하기</S.HeaderBTN>
            <S.ContentsLike>
              <S.HeaderText>좋아요</S.HeaderText>
              <S.HeaderNum>{props.data?.fetchBoard?.likeCount}</S.HeaderNum>
            </S.ContentsLike>
            <S.RatingText>
              <S.HeaderText>싫어요</S.HeaderText>
              <S.HeaderNum>{props.data?.fetchBoard?.dislikeCount}</S.HeaderNum>
            </S.RatingText>
          </S.ContentsInfo>
        </S.DetailHeader>
        <S.MainContents>
          <S.ContentsImage>
            <img src="/img/nyangcat.jpeg" />
          </S.ContentsImage>
          <S.ContentsTitle>
            <S.ContentsTitleTop />
            <S.ContentsTitleBottom>
              <S.TitleHeader>Title</S.TitleHeader>
              <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            </S.ContentsTitleBottom>
          </S.ContentsTitle>
        </S.MainContents>
        <S.DivideLine />
        <S.TextArea>{props.data?.fetchBoard?.contents}</S.TextArea>
        {props.data?.fetchBoard?.youtubeUrl && (
          <S.Youtube>
            <S.YoubuteBTN onClick={props.onClickOpen}>youtube</S.YoubuteBTN>
          </S.Youtube>
        )}
        {props.isYoutube && (
          <S.YoutubeMain id="youtube">
            <ReactPlayer
              id="player"
              url={`${props.data?.fetchBoard?.youtubeUrl}`}
              width={700}
              height={450}
            />
          </S.YoutubeMain>
        )}
      </S.RightSide>
    </S.Wrapper>
  );
}
