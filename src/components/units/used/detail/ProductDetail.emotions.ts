import styled from "@emotion/styled";
import Slider from "react-slick";
import { IPropsInfoBtn, IPropsInquireBtn } from "./ProductDetail.types";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-end;

  background-color: #33363d;
`;

export const DetailWrapper = styled.div`
  width: 90%;
  height: 100%;
`;

export const ProductInfoWrapper = styled.div`
  width: 100%;
  height: 69vh;

  display: flex;

  margin-bottom: 20px;
`;

export const Picture = styled.div`
  width: 50%;
  height: 100%;

  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 10vh;

  padding: 20px;
`;
export const InfoBtn = styled.button`
  width: 15%;
  height: 100%;

  font-size: 1.5rem;
  color: aliceblue;

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsInfoBtn) =>
    props.isInfo ? "#33363d" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;
export const InquireBtn = styled.button`
  width: 15%;
  height: 100%;

  font-size: 1.5rem;
  color: aliceblue;

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsInquireBtn) =>
    props.isInquire ? "#33363d" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const DivideLine = styled.div`
  width: 98%;
  height: 5vh;

  margin-bottom: 50px;
  margin-left: 20px;

  border-bottom: 1px solid gray;
`;

export const OptionWrapper = styled.div`
  width: 10%;
  height: 100%;
  border: 1px solid gray;
`;

// carousel
export const CraouselWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Craousel = styled(Slider)`
  width: 100%;
  height: 66vh;

  position: relative;

  div,
  img {
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    top: 101%;
    right: 0px;
  }
  .slick-dots li {
    width: 50px;
    height: 50px;
  }
`;

// productInfo
export const SellerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ProductInfo = styled.div`
  width: 50%;
  height: 100%;

  padding: 10px;
`;

export const SellerProfile = styled.div`
  width: 100%;
  height: 11%;

  display: flex;

  margin-bottom: 20px;
`;

export const SellerPicture = styled.div`
  width: 12%;
  height: 100%;

  padding: 5px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;

export const SellerName = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  margin-left: 5px;

  span {
    font-size: 1.6rem;
    color: aliceblue;
  }
`;

export const PickedCount = styled.div`
  width: 28%;
  height: 100%;

  display: flex;
  align-items: center;

  padding: 10px 0px 10px 0px;

  :hover {
    cursor: pointer;
  }

  svg {
    width: 50%;
    height: 80%;

    color: #fe1881;
  }
  span {
    font-size: 1.6rem;
    color: aliceblue;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;

  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }

  #name {
    width: 100%;
    height: 65%;

    span {
      font-size: 2.2rem;
      color: aliceblue;
    }
  }

  #remarks {
    width: 100%;
    height: 35%;

    span {
      font-size: 1.4rem;
      color: #e3e3ff;
    }
  }
`;

export const Price = styled.div`
  width: 100%;
  height: 13.5%;

  margin-bottom: 10px;

  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  #placeholder {
    width: 20%;
    height: 100%;

    span {
      font-size: 2.2rem;
      color: aliceblue;
    }
  }
  #price {
    width: 80%;
    height: 100%;

    span {
      margin-left: 20px;

      font-size: 2.2rem;
      color: aliceblue;
    }
  }
`;

export const Tags = styled.div`
  width: 100%;
  height: 7%;

  margin-bottom: 10px;
  padding: 5px 0px;

  display: flex;

  div {
    height: 100%;
    min-width: 10%;

    padding: 5px;
    margin-right: 10px;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #e3e3ff;

    span {
      font-size: 1.1rem;
      color: #fe1881;
    }
  }
`;

export const Address = styled.div`
  width: 100%;
  height: 24.4%;

  margin-bottom: 10px;

  div {
    width: 100%;
    height: 33%;

    span {
      font-size: 1.6rem;
      color: aliceblue;
    }
  }

  #addressGuide {
    width: 100%;
    height: 66%;

    display: flex;
    align-items: center;

    span {
      margin-left: 20px;
      font-size: 2rem;
    }
  }
`;

export const Options = styled.div`
  width: 100%;
  height: 15%;

  margin-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: start;

  .edit {
    width: 30%;
    height: 100%;

    margin-right: 20px;
  }

  .nomal {
    width: 30%;
    height: 100%;

    margin-right: 20px;
  }
`;

// 상품정보
export const ProductContents = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Contents = styled.div`
  width: 80%;
  min-height: 12vh;

  margin-top: 30px;

  font-size: 1.7rem;
  color: aliceblue;
`;

export const RequireWrapper = styled.div`
  width: 100%;

  padding: 10px;
`;

export const QuestionList = styled.div`
  width: 100%;

  padding: 20px;
`;

export const MapWrapper = styled.div`
  width: 70%;
  height: 80vh;

  border: 1px solid gray;
`;

export const MapWrapperBox = styled.div`
  width: 100%;
  height: 85vh;

  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

interface IPropsMapBtn {
  isMap: boolean;
}

export const MapBtn = styled.button`
  width: 15%;
  height: 100%;

  font-size: 1.5rem;
  color: aliceblue;

  border: 1px solid gray;
  border-bottom: none;

  background-color: ${(props: IPropsMapBtn) =>
    props.isMap ? "#33363d" : "#747a8a"};

  :hover {
    cursor: pointer;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;
