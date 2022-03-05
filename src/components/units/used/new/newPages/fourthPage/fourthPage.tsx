import { useContext, useRef, useState } from "react";
import { CreateProductContext } from "../../../../../../../pages/used/new";
import CreateProductFooter from "../PageFooter";
import { v4 as uuidv4 } from "uuid";
import * as S from "../Pages.emotions";
import { useUploadImages } from "../../../../../commons/hooks/useUploadImg";

const STORAGE = "https://storage.googleapis.com/";

export default function CreateProductFourthPage() {
  const { readerImg } = useContext(CreateProductContext);
  const uploadRef = useRef<HTMLInputElement>(null);
  const { onChangeFileReader } = useUploadImages();
  const [url, setUrl] = useState<string>("");

  const onClickImg = (clickUrl: string) => () => {
    setUrl(clickUrl);
    uploadRef.current?.click();
  };

  return (
    <S.Wrapper>
      <S.Header>
        <span>상품 등록</span>
      </S.Header>
      <S.BodyWrapper>
        <S.Body>
          <S.PictureHeader>
            <span>상품 사진</span>
            <input
              type="file"
              ref={uploadRef}
              onChange={onChangeFileReader(url)}
            />
          </S.PictureHeader>
          <S.PicturesWrapper>
            {readerImg && readerImg.length ? (
              <>
                {readerImg.length === 6 ? (
                  <>
                    {readerImg.map((image) =>
                      image.includes("codecamp") ? (
                        <S.Pictures key={uuidv4()}>
                          <img src={STORAGE + image} />
                          <div onClick={onClickImg(image)}>
                            <span>Edit</span>
                          </div>
                        </S.Pictures>
                      ) : (
                        <S.Pictures key={uuidv4()}>
                          <img src={image} />
                          <div onClick={onClickImg(image)}>
                            <span>Edit</span>
                          </div>
                        </S.Pictures>
                      )
                    )}
                  </>
                ) : (
                  <>
                    <S.Pictures>
                      <img src="/img/ItemNoImg.png" />
                      <div onClick={onClickImg("")}>
                        <span>Click!</span>
                      </div>
                    </S.Pictures>
                    {readerImg.map((image) =>
                      image.includes("codecamp") ? (
                        <S.Pictures key={uuidv4()}>
                          <img src={STORAGE + image} />
                          <div onClick={onClickImg(image)}>
                            <span>Edit</span>
                          </div>
                        </S.Pictures>
                      ) : (
                        <S.Pictures key={uuidv4()}>
                          <img src={image} />
                          <div onClick={onClickImg(image)}>
                            <span>Edit</span>
                          </div>
                        </S.Pictures>
                      )
                    )}
                  </>
                )}
              </>
            ) : (
              <S.Pictures>
                <img src="/img/ItemNoImg.png" />
                <div onClick={onClickImg("")}>
                  <span>Click!</span>
                </div>
              </S.Pictures>
            )}
          </S.PicturesWrapper>
        </S.Body>
      </S.BodyWrapper>
      <S.FooterWrapper>
        <S.Footer>
          <CreateProductFooter />
        </S.Footer>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
