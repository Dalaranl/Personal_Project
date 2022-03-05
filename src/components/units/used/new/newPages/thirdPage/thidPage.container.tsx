import { useContext, useState } from "react";
import { CreateProductContext } from "../../../../../../../pages/used/new";
import CreateProductThirdPageUI from "./thirdPage.presenter";

export default function CreateProductThirdPage() {
  const { setIsSearch } = useContext(CreateProductContext);
  const [isDaumPost, setIsDaumPost] = useState(false);
  const onClickDaumPost = () => {
    setIsSearch && setIsSearch(true);
    setIsDaumPost((prev) => !prev);
  };

  return (
    <CreateProductThirdPageUI
      isDaumPost={isDaumPost}
      onClickDaumPost={onClickDaumPost}
    />
  );
}
