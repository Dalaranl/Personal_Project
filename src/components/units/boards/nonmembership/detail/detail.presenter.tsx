import * as S from "./detail.emotions";
import CommentsWrite from "../../comments/write/comments.container";
import CommentList from "../../comments/list/CommentList.container";
import ReactPlayer from "react-player";
import { getMyDate } from "../../../../../commons/libraries/getData";
import { IQuery } from "../../../../../commons/types/generated/types";
import DeleteModal from "../../../../commons/libraries/modal/deleteModal";

interface IPropsDetailUI {
  data?: Pick<IQuery, "fetchBoard">;
  isYoutube: boolean;
  pushBoardDetail: string;
  datas: Pick<IQuery, "fetchBoardComments"> | undefined;
  imgUrl: string;
  number: number;
  modal: boolean;
  modalMessage: string;
  modalClose: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickOpen: () => void;
  onClickEdit: () => void;
  onClickNew: () => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickDelete: () => void;
}

const STORAGE = "https://storage.googleapis.com/";

export default function DetailUI(props: IPropsDetailUI) {
  return (
    <S.Wrapper>
      <DeleteModal
        modal={props.modal}
        modalMessage={props.modalMessage}
        modalClose={props.modalClose}
      />

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
          <S.HeaderBTN onClick={props.onClickDelete}>삭제하기</S.HeaderBTN>
          <S.HeaderBTN onClick={props.onClickNew}>글쓰기</S.HeaderBTN>
          <S.HeaderBTN onClick={props.onClickEdit}>수정하기</S.HeaderBTN>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={props.onClickPrev}
          >
            <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
          </svg>
          <img
            src={STORAGE + props.imgUrl}
            onError={(e) => {
              e.currentTarget.src = "/img/Illustrations.png";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={props.onClickNext}
          >
            <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
          </svg>
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
      <S.LikeDislike>
        <button className="like" onClick={props.onClickLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
        <button className="dislike" onClick={props.onClickDisLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"
            />
          </svg>
        </button>
      </S.LikeDislike>
      <S.DivideLine />
      <S.CommentsWrapper>
        <CommentsWrite pushBoardDetail={props.pushBoardDetail} />
        <CommentList
          datas={props.datas}
          pushBoardDetail={props.pushBoardDetail}
        />
      </S.CommentsWrapper>
      <div id="footer" />
    </S.Wrapper>
  );
}
