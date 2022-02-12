import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gql, useQuery } from "@apollo/client";
import * as S from "./BoardListCarousel.emotion";
import { MouseEvent } from "react";

interface IProps {
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
}

const FETCH_BOARDS_OFTHEBEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
    }
  }
`;
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      likeCount
    }
  }
`;

export default function BoardListCarouselUI(props: IProps) {
  const { data } = useQuery(FETCH_BOARDS_OFTHEBEST);
  console.log(data?.fetchBoardsOfTheBest);

  const { data: best1 } = useQuery(FETCH_BOARD, {
    variables: { boardId: data?.fetchBoardsOfTheBest[0]?._id },
  });
  const { data: best2 } = useQuery(FETCH_BOARD, {
    variables: { boardId: data?.fetchBoardsOfTheBest[1]?._id },
  });
  const { data: best3 } = useQuery(FETCH_BOARD, {
    variables: { boardId: data?.fetchBoardsOfTheBest[2]?._id },
  });
  const { data: best4 } = useQuery(FETCH_BOARD, {
    variables: { boardId: data?.fetchBoardsOfTheBest[3]?._id },
  });
  console.log("분활 아이디" + best1, best2, best3, best4);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <S.List id={best1?.fetchBoard?._id} onClick={props.onClickMoveDetail}>
            <S.ListThumbNail>
              <S.ThumbNail src="/img/DefaultProfile.png" />
            </S.ListThumbNail>
            <S.ListUserInfo>
              <S.ListLikeCount>
                <svg
                  width="2.3rem"
                  height="2.3rem"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  color="#FF3838"
                >
                  <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
                <span>{best1?.fetchBoard?.likeCount}</span>
              </S.ListLikeCount>
              <S.ListWriter>
                <span>: {best1?.fetchBoard?.writer}</span>
              </S.ListWriter>
            </S.ListUserInfo>
            <S.ListTitle>
              <div id="title">Title</div>
              <S.Title>{best1?.fetchBoard?.title}</S.Title>
            </S.ListTitle>
          </S.List>
        </div>
        <div></div>
        <div>
          <S.List id={best2?.fetchBoard?._id} onClick={props.onClickMoveDetail}>
            <S.ListThumbNail>
              <S.ThumbNail src="/img/DefaultProfile.png" />
            </S.ListThumbNail>
            <S.ListUserInfo>
              <S.ListLikeCount>
                <svg
                  width="2.3rem"
                  height="2.3rem"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  color="#FF3838"
                >
                  <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
                <span>{best2?.fetchBoard?.likeCount}</span>
              </S.ListLikeCount>
              <S.ListWriter>
                <span>: {best2?.fetchBoard?.writer}</span>
              </S.ListWriter>
            </S.ListUserInfo>
            <S.ListTitle>
              <div id="title">Title</div>
              <S.Title>{best2?.fetchBoard?.title}</S.Title>
            </S.ListTitle>
          </S.List>
        </div>
        <div></div>
        <div>
          <S.List id={best3?.fetchBoard?._id} onClick={props.onClickMoveDetail}>
            <S.ListThumbNail>
              <S.ThumbNail src="/img/DefaultProfile.png" />
            </S.ListThumbNail>
            <S.ListUserInfo>
              <S.ListLikeCount>
                <svg
                  width="2.3rem"
                  height="2.3rem"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  color="#FF3838"
                >
                  <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
                <span>{best3?.fetchBoard?.likeCount}</span>
              </S.ListLikeCount>
              <S.ListWriter>
                <span>: {best3?.fetchBoard?.writer}</span>
              </S.ListWriter>
            </S.ListUserInfo>
            <S.ListTitle>
              <div id="title">Title</div>
              <S.Title>{best3?.fetchBoard?.title}</S.Title>
            </S.ListTitle>
          </S.List>
        </div>
        <div></div>
        <div>
          <S.List id={best4?.fetchBoard?._id} onClick={props.onClickMoveDetail}>
            <S.ListThumbNail>
              <S.ThumbNail src="/img/DefaultProfile.png" />
            </S.ListThumbNail>
            <S.ListUserInfo>
              <S.ListLikeCount>
                <svg
                  width="2.3rem"
                  height="2.3rem"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  color="#FF3838"
                >
                  <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
                <span>{best4?.fetchBoard?.likeCount}</span>
              </S.ListLikeCount>
              <S.ListWriter>
                <span>: {best4?.fetchBoard?.writer}</span>
              </S.ListWriter>
            </S.ListUserInfo>
            <S.ListTitle>
              <div id="title">Title</div>
              <S.Title>{best4?.fetchBoard?.title}</S.Title>
            </S.ListTitle>
          </S.List>
        </div>
        <div></div>
      </Slider>
    </div>
  );
}
