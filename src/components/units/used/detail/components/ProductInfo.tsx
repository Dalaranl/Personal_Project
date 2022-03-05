import { useContext } from "react";
import { ProductDetailContext } from "../ProductDetail.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "../ProductDetail.emotions";
import FullSizeButton from "../../../../commons/buttons/fullSize";
import { useFetchUserInfo } from "../../../../commons/hooks/useFetchUserInfo";
import { useProductDetail } from "../../../../commons/hooks/useProductDetail";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USEDITEMS_IPICKED } from "../ProductDetail.queries";

const STORAGE = "https://storage.googleapis.com/";

export default function ProductInfo() {
  const { data } = useFetchUserInfo();
  const { sellerInfo, itemInfo, tags, itemAddress, item } =
    useContext(ProductDetailContext);
  const { data: pickdata } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, { variables: { search: item?.name } });
  const router = useRouter();

  const {
    onClickBuyItem,
    onClickMoveToList,
    onClickMoveToEdit,
    onClickDeleteItem,
    onClickPick,
  } = useProductDetail();
  const loggedInfo = data?.fetchUserLoggedIn;

  return (
    <S.SellerWrapper>
      <S.SellerProfile>
        <S.SellerPicture>
          <img
            src={sellerInfo && STORAGE + sellerInfo.picture}
            onError={(e) => {
              e.currentTarget.src = "/img/defaultProfile.jpeg";
            }}
          />
        </S.SellerPicture>
        <S.SellerName>
          <span>{sellerInfo && sellerInfo.name}</span>
        </S.SellerName>
        {pickdata?.fetchUseditemsIPicked.length ? (
          <S.PickedCount
            onClick={onClickPick(String(itemInfo?._id), String(itemInfo?.name))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <span>{item && item.pickedCount}</span>
          </S.PickedCount>
        ) : (
          <S.PickedCount
            onClick={onClickPick(String(itemInfo?._id), String(itemInfo?.name))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span>{item && item.pickedCount}</span>
          </S.PickedCount>
        )}
      </S.SellerProfile>
      <S.Title>
        <div id="name">
          <span>{itemInfo && itemInfo.name}</span>
        </div>
        <div id="remarks">
          <span>{itemInfo && itemInfo.remarks}</span>
        </div>
      </S.Title>
      <S.Price>
        <div id="placeholder">
          <span>판매가격</span>
        </div>
        <div id="price">
          <span>{itemInfo && itemInfo.price} 원</span>
        </div>
      </S.Price>
      <S.Tags>
        {tags &&
          tags.map((el) => (
            <div key={uuidv4()}>
              <span>{el}</span>
            </div>
          ))}
      </S.Tags>
      <S.Address>
        <div>
          <span>거래장소</span>
        </div>
        {itemAddress && itemAddress.address ? (
          <>
            <div>
              <span>{itemAddress.address}</span>
            </div>
            <div>
              <span>{itemAddress.addressDetail}</span>
            </div>
          </>
        ) : (
          <div id="addressGuide">
            <span>지정된 장소가 없습니다.</span>
          </div>
        )}
      </S.Address>
      <S.Options>
        {sellerInfo && sellerInfo.name === loggedInfo?.name ? (
          <S.BtnWrapper>
            <div className="edit">
              <FullSizeButton onClick={onClickMoveToList} name="목록으로" />
            </div>
            <div className="edit">
              <FullSizeButton
                onClick={onClickMoveToEdit(String(router.query.useditemid))}
                name="수정하기"
              />
            </div>
            <div className="edit">
              <FullSizeButton
                name="삭제하기"
                onClick={onClickDeleteItem(String(itemInfo?._id))}
              />
            </div>
          </S.BtnWrapper>
        ) : (
          <S.BtnWrapper>
            <div className="nomal">
              <FullSizeButton
                name="구매하기"
                onClick={onClickBuyItem(String(itemInfo?._id))}
              />
            </div>
            <div className="nomal">
              <FullSizeButton onClick={onClickMoveToList} name="목록으로" />
            </div>
          </S.BtnWrapper>
        )}
      </S.Options>
    </S.SellerWrapper>
  );
}
