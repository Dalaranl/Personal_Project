import Footer from "./common/footer";
import * as S from "./CreateBoard.emotion";
import { IPropsCreateBoardUI } from "./CreateBoard.types";
import ReactPlayer from "react-player";
import FooterSubmit from "./common/footerSubmit";
import BasicModal from "../../../../commons/libraries/modal/basicModal";
import DaumPostCode from "../../../../commons/libraries/modal/addressModal";
import { Fragment } from "react";

const STORAGE = "https://storage.googleapis.com/";

export default function CreateBoardUI(props: IPropsCreateBoardUI) {
  const { youtubeUrl } = props.userInfo;
  const { zipcode, address, addressDetail } = props.adDress;
  // const {
  //   writer: editWriter,
  //   title: editTitle,
  //   contents: editContents,
  //   boardAddress,
  //   youtubeUrl: editYoutubeUrl,
  // } = props.data?.fetchBoard;

  return (
    <S.Wrapper>
      <DaumPostCode
        isDaumPost={props.isDaumPost}
        SetIsDaumPost={props.SetIsDaumPost}
        onChangeAddress={props.onChangeAddress}
      />
      <BasicModal
        modalMessage={props.modalMessage}
        modal={props.modal}
        handleClose={props.handleClose}
      />
      <S.MainWrapper id="movePage">
        <S.UserInfoWrapper>
          <S.UserInfo>
            <S.UserInfoHeader>
              <S.UserHeaderTop>
                {props.isEdit ? (
                  <div>게시물을 수정합니다.</div>
                ) : (
                  <div>게시물을 작성합니다.</div>
                )}
              </S.UserHeaderTop>
              <S.UserHeaderBottom>
                <div>닉네임과 비밀번호를 입력해주세요.</div>
              </S.UserHeaderBottom>
            </S.UserInfoHeader>
            <S.UserInfoBody>
              <S.UserBodyLeft>
                <div>
                  <input
                    name="writer"
                    type="text"
                    placeholder="닉네임를 입력하세요."
                    defaultValue={props.data?.fetchBoard.writer}
                    readOnly={!!props.data?.fetchBoard.writer}
                    onChange={props.onChangeUserInfo}
                  />
                  <span></span>
                </div>
                <div>
                  <input
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    onChange={props.onChangeUserInfo}
                  />
                  <span></span>
                </div>
              </S.UserBodyLeft>
              <S.UserBodyRight>
                <img src="/img/museDash.gif" />
              </S.UserBodyRight>
            </S.UserInfoBody>
            <Footer
              onClickPrevPage={props.onClickPrevPage}
              onClickNextPage={props.onClickNextPage}
              onClickReset={props.onClickReset}
            />
          </S.UserInfo>
          <S.Block />
        </S.UserInfoWrapper>
        <S.ContentsInfoWrapper>
          <S.ContentsInfo>
            <S.CommonHeader>
              <span>제목과 내용을 작성해주세요.</span>
            </S.CommonHeader>
            <S.Title>
              <input
                name="title"
                type="text"
                defaultValue={props.data?.fetchBoard.title}
                placeholder="제목을 입력하세요."
                onChange={props.onChangeUserInfo}
              />
            </S.Title>
            <S.Contents>
              <textarea
                placeholder="내용을 입력하세요."
                maxLength={1000}
                defaultValue={props.data?.fetchBoard.contents}
                onChange={props.onChangeContents}
              />
              <div>
                <span>{`${props.contents.length}/1000`}</span>
              </div>
            </S.Contents>
            <Footer
              onClickPrevPage={props.onClickPrevPage}
              onClickNextPage={props.onClickNextPage}
              onClickReset={props.onClickReset}
            />
          </S.ContentsInfo>
          <S.Block />
        </S.ContentsInfoWrapper>
        <S.AddressWrapper>
          <S.Address>
            <S.CommonHeader>
              <span>주소를 입력해 주세요.</span>
            </S.CommonHeader>
            <S.AddressBody>
              <div>
                <input
                  id="areaNumber"
                  type="text"
                  placeholder="00000"
                  readOnly
                  value={
                    zipcode ||
                    props.data?.fetchBoard?.boardAddress.zipcode ||
                    ""
                  }
                />
                <button onClick={props.SetIsDaumPost}>우편번호 검색</button>
              </div>
              <div>
                <input
                  className="address"
                  type="text"
                  readOnly
                  value={
                    address ||
                    props.data?.fetchBoard?.boardAddress.address ||
                    ""
                  }
                />
              </div>
              <div>
                <input
                  className="address"
                  name="addressDetail"
                  type="text"
                  onChange={props.onChangeDetailAddress}
                  defaultValue={
                    addressDetail ||
                    props.data?.fetchBoard?.boardAddress.addressDetail ||
                    ""
                  }
                />
              </div>
            </S.AddressBody>
            <Footer
              onClickPrevPage={props.onClickPrevPage}
              onClickNextPage={props.onClickNextPage}
              onClickReset={props.onClickReset}
            />
          </S.Address>
          <S.Block />
        </S.AddressWrapper>
        <S.UrlWrapper>
          <S.Url>
            <S.CommonHeader>
              <span>원하는 YouTube & 사진을 올려주세요.</span>
            </S.CommonHeader>
            <S.UrlBody>
              <div className="UrlBody">
                <div className="urlHeader">
                  <span>YouTube</span>
                </div>
                <div className="Url">
                  <S.UrlInput
                    name="youtubeUrl"
                    placeholder="YouTube Url"
                    onChange={props.onChangeUserInfo}
                  />
                </div>
                <div className="UrlContents">
                  <ReactPlayer
                    url={`${
                      youtubeUrl || props.data?.fetchBoard?.youtubeUrl || ""
                    }`}
                    height={385}
                    width={500}
                  />
                </div>
              </div>
              <div className="UrlBody">
                <div className="urlHeader">
                  <span>Picture</span>
                </div>
                <div className="Url">
                  <div className="Urlpic">
                    <button onClick={props.onClickImg}>
                      {props.isEdit ? "사진 수정하기" : "사진 등록하기"}
                    </button>
                  </div>
                  <div className="Urlpic">
                    <span>
                      {props.isEdit
                        ? `사진등록 갯수: ${props.editImages.length}`
                        : `사진등록 갯수: ${props.images.length}`}
                      개
                    </span>
                  </div>
                  <div className="Urlpic">
                    <input
                      type="file"
                      ref={props.fileRef}
                      onChange={props.onChangeUpload}
                    />
                  </div>
                </div>
                <div className="UrlContents">
                  {props.isEdit
                    ? props.editImages.map((el) => (
                        <Fragment key={el}>
                          <img
                            id={el}
                            className="editUrl"
                            src={STORAGE + el}
                            onClick={props.onClickEditImg}
                          />
                        </Fragment>
                      ))
                    : props.images.map((el) => (
                        <Fragment key={el}>
                          <img
                            id={el}
                            className="editUrl"
                            src={STORAGE + el}
                            onClick={props.onClickEditImg}
                          />
                        </Fragment>
                      ))}
                </div>
              </div>
            </S.UrlBody>
            <FooterSubmit
              onClickPrevPage={props.onClickPrevPage}
              onClickCreateBoard={props.onClickCreateBoard}
              onClickReset={props.onClickReset}
              onClickUpdateBoard={props.onClickUpdateBoard}
              isEdit={props.isEdit}
            />
          </S.Url>
          <S.Block />
        </S.UrlWrapper>
      </S.MainWrapper>
      <S.Aside></S.Aside>
    </S.Wrapper>
  );
}
