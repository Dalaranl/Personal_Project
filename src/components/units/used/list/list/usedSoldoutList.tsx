import { IPropsUsedSoldoutList } from "../Used.types";
import { v4 as uuidv4 } from "uuid";
import * as S from "./usedList.emotion";

const STORAGE = "https://storage.googleapis.com/";

export default function UsedSoldoutList(props: IPropsUsedSoldoutList) {
  const items = props.items;

  return (
    <S.Wrapper>
      <S.PictureWrapper>
        {items.images && items.images[0] !== "" && items.images.length ? (
          <img
            src={STORAGE + items.images[0]}
            onError={(e) => {
              e.currentTarget.src = "/img/404.png";
            }}
          />
        ) : (
          <>
            <img src="/img/ItemNoImg.png" />
            <div className="NoImage">
              <span>No Image</span>
            </div>
          </>
        )}
      </S.PictureWrapper>
      <S.WordWrapper>
        <S.WriterWrapper>
          <S.Profile>
            <img
              src={STORAGE + items.seller?.picture}
              onError={(e) => {
                e.currentTarget.src = "/img/defaultProfile.jpeg";
              }}
            />
          </S.Profile>
          <span>{items.seller?.name}</span>
        </S.WriterWrapper>
        <S.NameWrapper>
          <span>{items.name}</span>
        </S.NameWrapper>
        <S.RemarkWrapper>
          <span>{items.remarks}</span>
        </S.RemarkWrapper>
        <S.TagWrapper>
          {items.tags?.map((tag) => (
            <span key={uuidv4()}>{tag}</span>
          ))}
        </S.TagWrapper>
        <S.PriceWrapper>
          <span>₩ {items.price}원</span>
        </S.PriceWrapper>
      </S.WordWrapper>
    </S.Wrapper>
  );
}
