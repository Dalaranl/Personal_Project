import { useProductList } from "../../../../commons/hooks/useProductList";
import { IPropsUsedList } from "../Used.types";
import { v4 as uuidv4 } from "uuid";
import * as S from "./usedList.emotion";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USEDITEMS_IPICKED } from "../../detail/ProductDetail.queries";
import { useProductDetail } from "../../../../commons/hooks/useProductDetail";

const STORAGE = "https://storage.googleapis.com/";

export default function UsedList(props: IPropsUsedList) {
  const {
    isHover,
    pickRef,
    basketRef,
    onMouseOut,
    onMouseOver,
    onClickMoveToDetail,
  } = useProductList();
  const { onClickPick } = useProductDetail();

  const items = props.items;

  const { data: pickdata } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, { variables: { search: items?.name } });

  return (
    <S.Wrapper>
      <S.PictureWrapper
        className={isHover}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
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
        <S.Pick ref={pickRef} onClick={onClickPick(items._id, items.name)}>
          {pickdata?.fetchUseditemsIPicked.length ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          )}
          <span>{items.pickedCount}</span>
        </S.Pick>
        <S.Basket ref={basketRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </S.Basket>
      </S.PictureWrapper>
      <S.WordWrapper onClick={onClickMoveToDetail(items._id, items)}>
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
