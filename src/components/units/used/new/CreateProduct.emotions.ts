import styled from "@emotion/styled";
import { IPropsEmotions } from "./CreateProduct.types";

// skeleton
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainWrapper = styled.div`
  width: 340vw;
  height: 94vh;

  position: fixed;
  left: ${(props: IPropsEmotions) => props.wrapperSize + "vw"};
  z-index: 1;
  transition: all 0.35s;

  display: flex;

  background-color: #33363d;
`;

export const Block = styled.div`
  width: 28%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  width: 25%;
  height: 100%;
`;
export const ProductContents = styled.div`
  width: 25%;
  height: 100%;
`;
export const ProductMap = styled.div`
  width: 25%;
  height: 100%;
`;
export const ProductPicture = styled.div`
  width: 25%;
  height: 100%;
`;
