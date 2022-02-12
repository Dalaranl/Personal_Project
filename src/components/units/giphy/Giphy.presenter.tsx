import * as S from "./Giphy.emotion";
import { ChangeEvent, MouseEvent } from "react";
import GiphyModal from "../../commons/libraries/modal/GiphyModal";
import { v4 as uuidv4 } from "uuid";

export interface IPropsGiphyUI {
  onClickTrending: () => void;
  onClickSearch: () => void;
  onClickClipsTrending: () => void;
  onClickClipsSearch: () => void;
  onChangeIsGIF: () => void;
  onChangeIsClips: () => void;
  handleClose: () => void;
  onClickImg: (e: MouseEvent<HTMLImageElement>) => void;
  onChangeUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectRating: (e: ChangeEvent<HTMLSelectElement>) => void;
  returnData: string[];
  isGif: boolean;
  isClick: boolean;
  clickId: string;
}

export default function GiphyUI(props: IPropsGiphyUI) {
  return (
    <S.Wrapper>
      <GiphyModal
        handleClose={props.handleClose}
        isClick={props.isClick}
        clickId={props.clickId}
      />
      <S.Header>
        <S.Logo>
          <img src="/img/GIPHYLogo.png" />
        </S.Logo>
        <S.Function>
          <div className="functionWrapper">
            <S.ButtonWrapper></S.ButtonWrapper>
          </div>
          <div className="functionWrapper">
            <S.ButtonWrapper>
              <select defaultValue="rating" onChange={props.onSelectRating}>
                <option disabled value="rating">
                  Rating
                </option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
                <option value="R">R</option>
              </select>
              <button onClick={props.onChangeIsGIF}>GIF</button>
              {/* <button onClick={props.onChangeIsClips}>Clips</button> */}
            </S.ButtonWrapper>
          </div>
          <div className="functionWrapper">
            <S.ButtonWrapper>
              <input type="text" onChange={props.onChangeUserInput} />
              {props.isGif ? (
                <>
                  <button onClick={props.onClickSearch}>Search</button>
                  <button onClick={props.onClickTrending}>trending</button>
                </>
              ) : (
                <>
                  <button onClick={props.onClickClipsSearch}>Search</button>
                  <button onClick={props.onClickClipsTrending}>trending</button>
                </>
              )}
            </S.ButtonWrapper>
          </div>
        </S.Function>
      </S.Header>
      <div id="result">
        {props.returnData.map((el) => (
          <div key={uuidv4()} style={{ width: "27vw", height: "33vh" }}>
            <S.RsultImg src={el} id={el} onClick={props.onClickImg} />
          </div>
        ))}
      </div>
    </S.Wrapper>
  );
}
