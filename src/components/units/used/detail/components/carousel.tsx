import { useContext } from "react";
// import Slider from "react-slick";
import * as S from "../ProductDetail.emotions";
import { ProductDetailContext } from "../ProductDetail.container";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const STORAGE = "https://storage.googleapis.com/";

export default function ProductCarousel() {
  const { images } = useContext(ProductDetailContext);

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={images && STORAGE + images[i]} />
        </a>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.CraouselWrapper>
      <S.Craousel {...settings}>
        {images &&
          images.map((url) => (
            <div key={uuidv4()}>
              <img src={STORAGE + url} />
            </div>
          ))}
      </S.Craousel>
    </S.CraouselWrapper>
  );
}
