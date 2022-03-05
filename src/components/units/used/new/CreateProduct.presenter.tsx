import { useContext } from "react";
import { CreateProductContext } from "../../../../../pages/used/new";
import BasicContextModal from "../../../commons/libraries/modal/contextModal/basicContextModal";
import * as S from "./CreateProduct.emotions";
import { IPropsCreateProductUI } from "./CreateProduct.types";
import CreateProductFirstPage from "./newPages/firstPage/firstPage";
import CreateProductFourthPage from "./newPages/fourthPage/fourthPage";
import CreateProductSecondPage from "./newPages/secondPage/secondPage";
import CreateProductThirdPage from "./newPages/thirdPage/thidPage.container";

export default function CreateProductUI(props: IPropsCreateProductUI) {
  const { wrapperSize } = useContext(CreateProductContext);

  return (
    <S.Wrapper>
      <BasicContextModal />
      <S.MainWrapper wrapperSize={wrapperSize}>
        <S.ProductInfo>
          <CreateProductFirstPage />
        </S.ProductInfo>
        <S.ProductContents>
          <CreateProductSecondPage />
        </S.ProductContents>
        <S.ProductMap>
          <CreateProductThirdPage />
        </S.ProductMap>
        <S.ProductPicture>
          <CreateProductFourthPage />
        </S.ProductPicture>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
