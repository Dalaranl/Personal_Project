import { useContext } from "react";
import { CreateProductContext } from "../../../../../../../pages/used/new";
import FullSizeButton from "../../../../../commons/buttons/fullSize";
import { useCreateUsedItem } from "../../../../../commons/hooks/useCreateUseItem";
import FullSizeInput from "../../../../../commons/inputs/fullSize";
import FullSizeInputNonOnchange from "../../../../../commons/inputs/fullSize-non-onChange";
import CreateProductFooter from "../PageFooter";
import * as S from "../Pages.emotions";
import ProductDaumPostModal from "./productDaumPostModal";
import KakaoMap from "./map";

export interface IPropsCreateProductThidPageUI {
  isDaumPost: boolean;
  onClickDaumPost: () => void;
}

export default function CreateProductThirdPageUI(
  props: IPropsCreateProductThidPageUI
) {
  const { address } = useContext(CreateProductContext);
  const { onChangeAddressDetail } = useCreateUsedItem();

  return (
    <S.Wrapper>
      <ProductDaumPostModal
        isDaumPost={props.isDaumPost}
        onClickDaumPost={props.onClickDaumPost}
      />
      <S.Header>
        <span>상품 등록</span>
      </S.Header>
      <S.BodyWrapper>
        <S.ThirdWrapper>
          <S.MapWrapper>
            <KakaoMap />
          </S.MapWrapper>
          <S.AddressWrapper>
            <S.ThirdHeader>
              <div>
                <span>주소를 입력해주세요.</span>
              </div>
            </S.ThirdHeader>
            <S.ZipcodeWrapper>
              <S.Zipcode>
                <FullSizeInputNonOnchange
                  name="zipcode"
                  type="text"
                  readOnly={true}
                  placeholder="00000"
                  defaultValue={(address && address.zipcode) || ""}
                />
              </S.Zipcode>
              <S.SearchZipcode>
                <FullSizeButton
                  name="우편번호 검색"
                  onClick={props.onClickDaumPost}
                />
              </S.SearchZipcode>
            </S.ZipcodeWrapper>
            <S.Address>
              <FullSizeInputNonOnchange
                name="address"
                type="text"
                readOnly={true}
                placeholder=""
                defaultValue={(address && address.address) || ""}
              />
            </S.Address>
            <S.Address>
              <FullSizeInput
                name="address"
                type="text"
                readOnly={false}
                placeholder=""
                onChange={onChangeAddressDetail}
                defaultValue={(address && address.addressDetail) || ""}
              />
            </S.Address>
          </S.AddressWrapper>
        </S.ThirdWrapper>
      </S.BodyWrapper>
      <S.FooterWrapper>
        <S.Footer>
          <CreateProductFooter />
        </S.Footer>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
