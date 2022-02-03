import * as S from "./CommentList.emotions";
import { DateToString } from "../../../../../commons/libraries/calcDate";
import { IPropsCommentListUI } from "./CommentList.types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BasicModal from "../../../../commons/libraries/modal/basicModal";
import PasswordModal from "../../../../commons/libraries/modal/passwordModal";
import CommentsEdit from "../edit/commentsEdit.container";

export default function CommentListUI(props: IPropsCommentListUI) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <S.Wrapper>
      <BasicModal
        modalMessage={props.modalMessage}
        modal={props.modal}
        handleClose={props.handleClose}
      />
      <PasswordModal
        onChangePassword={props.onChangePassword}
        passModal={props.passModal}
        passModalClose={props.passModalClose}
      />
      {props.datas?.fetchBoardComments?.map((el, index) =>
        props.isEditId === el._id ? (
          <CommentsEdit data={el} onClickFinishEdit={props.onClickFinishEdit} />
        ) : (
          <S.CommentsWrapper key={index}>
            <S.DetailHeader>
              <S.Writer>
                <S.WriterProfile>
                  <img src="/img/nyangcat.jpeg" />
                </S.WriterProfile>
                <S.WriterInfo>
                  <S.Name>
                    <span>{el.writer}</span>
                  </S.Name>
                  <S.CreatedAt>
                    {!el.updatedAt
                      ? DateToString(el.createdAt)
                      : DateToString(el.createdAt) + "(수정됨)"}
                  </S.CreatedAt>
                </S.WriterInfo>
              </S.Writer>
              <S.Function>
                <S.EditDelete>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="edit"
                    viewBox="0 0 16 16"
                    id={el._id}
                    onClick={props.onClickEdit}
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="delete"
                    viewBox="0 0 16 16"
                    id={el._id}
                    onClick={props.passModalOpen}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>
                </S.EditDelete>
                <S.Rating>
                  <StyledRating
                    name="customized-color"
                    defaultValue={el.rating}
                    readOnly
                    icon={<FavoriteIcon fontSize="medium" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="medium" />}
                  />
                </S.Rating>
              </S.Function>
            </S.DetailHeader>
            <S.Contents>
              <div>{el.contents}</div>
            </S.Contents>
          </S.CommentsWrapper>
        )
      )}
    </S.Wrapper>
  );
}
