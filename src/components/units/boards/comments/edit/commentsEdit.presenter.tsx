import * as S from "./commentsEdit.emotions";
import { IPropsCommentsEditUI } from "./commentsEdit.types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import BasicModal from "../../../../commons/libraries/modal/basicModal";

export default function CommentsEditUI(props: IPropsCommentsEditUI) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff6d75",
    },
  });

  return (
    <S.Wrapper>
      <BasicModal
        modal={props.modal}
        modalMessage={props.modalMessage}
        handleClose={props.handleClose}
      />
      <S.Header>
        <span>수정</span>
      </S.Header>
      <S.WriterInfo>
        <S.Profile>
          <img src="/img/DefaultProfile.png" />
        </S.Profile>
        <S.WriterInput>
          <input
            readOnly
            defaultValue={props.data.writer || ""}
            name="writer"
            type="text"
            maxLength={8}
            placeholder="작성자"
          />
          <input
            className="password"
            value={props.password}
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <StyledRating
            name="rating"
            defaultValue={props.data.rating}
            value={props.rating}
            precision={0.5}
            icon={<FavoriteIcon fontSize="large" />}
            emptyIcon={<FavoriteBorderIcon fontSize="large" />}
            onChange={props.onChangeRating}
          />
        </S.WriterInput>
        <S.Submit>
          <button id={props.data._id} onClick={props.onClickSubmit}>
            수정하기
          </button>
        </S.Submit>
      </S.WriterInfo>
      <S.MainContents>
        <textarea
          value={props.contents}
          defaultValue={props.data.contents}
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
