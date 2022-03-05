import { ChangeEvent, useContext } from "react";
import { CreateProductContext } from "../../../../pages/used/new";
import { checkFileValidation } from "../../../commons/libraries/checkFileValidation";

export function useUploadImages() {
  const { setImages, images, readerImg, setReaderImg } =
    useContext(CreateProductContext);

  const onChangeFileReader =
    (clickUrl: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }
      if (!readerImg || !setReaderImg || !images || !setImages) return;

      const isValid = checkFileValidation(images, file);
      if (!isValid) return;

      const index = readerImg.indexOf(clickUrl);

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = (data) => {
        let img = "";
        if (typeof data.target?.result === "string") {
          img = data.target?.result;
        }
        if (index < 0) {
          if (readerImg.length === 6)
            return alert("총 6장까지 등록 가능합니다.");

          setReaderImg((prev) => [...prev, img]);
          setImages((prev) => [...prev, file]);
        } else {
          const readerEdit = readerImg.map((el) => {
            if (el === clickUrl) return img;
            else return el;
          });
          // const readerEdit = readerImg;
          // readerEdit.splice(index, 1, img);
          const imagesEdit = images.map((el) => {
            if (el === file) return img;
            else return el;
          });

          setReaderImg([...readerEdit]);
          setImages([...imagesEdit]);
        }
      };
    };
  return { onChangeFileReader };
}
