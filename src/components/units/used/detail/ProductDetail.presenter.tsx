import { useContext, useState } from "react";
import ProductCarousel from "./components/carousel";
import InfiniteAnswer from "./components/inquire/list/infiniteAnswer";
import CreateInquire from "./components/inquire/new/createInqire";
import DetailMap from "./components/map/detailMap";
import ProductInfo from "./components/ProductInfo";
import { ProductDetailContext } from "./ProductDetail.container";
import Dompurify from "dompurify";
import * as S from "./ProductDetail.emotions";

export default function ProductDetailUI() {
  const { itemInfo, isInquire, setIsInquire, itemAddress } =
    useContext(ProductDetailContext);
  const [isInfo, setIsInfo] = useState(true);
  const [isMap, setIsMap] = useState(false);

  const onClickInfo = () => {
    setIsInfo(true);
    setIsMap(false);
    setIsInquire && setIsInquire(false);
  };

  const onClickInQuire = () => {
    setIsInquire && setIsInquire(true);
    setIsInfo(false);
    setIsMap(false);
  };

  const onClickIsMap = () => {
    setIsMap(true);
    setIsInquire && setIsInquire(false);
    setIsInfo(false);
  };

  return (
    <S.Wrapper>
      <S.DetailWrapper>
        <S.ProductInfoWrapper>
          <S.Picture>
            <ProductCarousel />
          </S.Picture>
          <S.ProductInfo>
            <ProductInfo />
          </S.ProductInfo>
        </S.ProductInfoWrapper>
        <S.DivideLine></S.DivideLine>
        <S.ButtonWrapper>
          <S.InfoBtn isInfo={isInfo} onClick={onClickInfo}>
            상품정보
          </S.InfoBtn>
          <S.InquireBtn isInquire={isInquire} onClick={onClickInQuire}>
            문의하기
          </S.InquireBtn>
          {itemAddress?.address ? (
            <S.MapBtn isMap={isMap} onClick={onClickIsMap}>
              지도보기
            </S.MapBtn>
          ) : (
            <></>
          )}
        </S.ButtonWrapper>
        {isInfo && (
          <S.ProductContents>
            <S.Contents>
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(itemInfo && itemInfo.contents)
                  ),
                }}
              />
            </S.Contents>
          </S.ProductContents>
        )}
        {isInquire && (
          <>
            <S.RequireWrapper>
              <CreateInquire />
            </S.RequireWrapper>
            <S.QuestionList>
              <InfiniteAnswer />
            </S.QuestionList>
          </>
        )}
        {isMap && (
          <S.MapWrapperBox>
            <S.MapWrapper>
              <DetailMap />
            </S.MapWrapper>
          </S.MapWrapperBox>
        )}
      </S.DetailWrapper>
      <S.OptionWrapper></S.OptionWrapper>
    </S.Wrapper>
  );
}
