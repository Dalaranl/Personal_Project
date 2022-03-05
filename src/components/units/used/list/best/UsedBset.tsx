import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";
import * as S from "./UsedBest.emotion";
import { useProductList } from "../../../../commons/hooks/useProductList";
import { FETCH_USEDITEMS_IPICKED } from "../../detail/ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { useProductDetail } from "../../../../commons/hooks/useProductDetail";

const STORAGE = "https://storage.googleapis.com/";

interface IPropsUsedBest {
  item: IUseditem;
}

export default function UsedBest(props: IPropsUsedBest) {
  const {
    isHover,
    pickRef,
    basketRef,
    onMouseOut,
    onMouseOver,
    onClickMoveToDetail,
  } = useProductList();
  const { onClickPick } = useProductDetail();
  const item = props.item;

  const { data: pickdata } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, { variables: { search: item?.name } });

  return (
    <S.UsedBestWrapper>
      <S.BestCardWrapper>
        <S.BestCardHeader onClick={onClickMoveToDetail(String(item._id), item)}>
          <S.ProfileImg>
            <img
              src={String(item.seller?.picture)}
              onError={(e) =>
                (e.currentTarget.src = "/img/defaultProfile.jpeg")
              }
            />
          </S.ProfileImg>
          <S.ProfileName>
            <span>{item.seller?.name}</span>
          </S.ProfileName>
          <S.Pick>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z" />
              </svg>
            </div>
            <div>
              <span>{item.pickedCount}</span>
            </div>
          </S.Pick>
        </S.BestCardHeader>
        <S.MainImg
          className={isHover}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {item.images && item.images[0] !== "" && item.images.length ? (
            <img
              src={STORAGE + item.images[0]}
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
          <S.Pickimg ref={pickRef} onClick={onClickPick(item._id, item.name)}>
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
            <span>{item.pickedCount}</span>
          </S.Pickimg>
          <S.Basket ref={basketRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </S.Basket>
        </S.MainImg>
        <S.InfoWrapper onClick={onClickMoveToDetail(String(item._id), item)}>
          <div className="TopBottom">
            <span>{item.name}</span>
          </div>
          <div id="middle">
            <span>{item.remarks}</span>
          </div>
          <div className="TopBottom">
            <span id="pricecolor">₩ {item.price}</span>
          </div>
        </S.InfoWrapper>
      </S.BestCardWrapper>
    </S.UsedBestWrapper>
  );
}
