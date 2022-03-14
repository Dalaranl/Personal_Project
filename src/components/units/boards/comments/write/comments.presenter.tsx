import * as S from "./comments.emotions";
import { IPropsCommentsWriteUI } from "./comments.types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

export default function CommentsWriteUI(props: IPropsCommentsWriteUI) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff6d75",
    },
  });
  const { writer, password } = props.writerInfo;

  return (
    <S.Wrapper>
      <S.Header>
        <span>댓글</span>
      </S.Header>
      <S.WriterInfo>
        <S.Profile>
          <img src="/img/DefaultProfile.png" />
        </S.Profile>
        <S.WriterInput>
          <input
            value={writer}
            name="writer"
            type="text"
            maxLength={8}
            placeholder="작성자"
            onChange={props.onChangeWriterInfo}
          />
          <input
            value={password}
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeWriterInfo}
          />
          <StyledRating
            name="rating"
            defaultValue={Number(props.rating)}
            precision={0.5}
            icon={<FavoriteIcon fontSize="large" />}
            emptyIcon={<FavoriteBorderIcon fontSize="large" />}
            onChange={props.onChangeRating}
          />
        </S.WriterInput>
        <S.Submit>
          <button onClick={props.onClickSubmit}>등록하기</button>
        </S.Submit>
      </S.WriterInfo>
      <S.MainContents>
        <textarea
          value={props.contents}
          id="textArea"
          placeholder="댓글을 입력하세요."
          onKeyDown={props.resize}
          onKeyUp={props.resize}
          onChange={props.onChangeContents}
        />
      </S.MainContents>
    </S.Wrapper>
  );
}
