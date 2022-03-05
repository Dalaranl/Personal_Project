import { createContext, useState } from "react";
import MyPageUI from "./MyPage.presenter";
import { IContextMyPageContext } from "./MyPage.types";

export const MyPageContext = createContext<IContextMyPageContext>({});

export default function MyPage() {
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isMyProduct, setIsMyProduct] = useState(true);
  const [isMyPoint, setIsMyPoint] = useState(false);

  const value = {
    isMyProfile,
    setIsMyProfile,
    isMyProduct,
    setIsMyProduct,
    isMyPoint,
    setIsMyPoint,
  };

  const onClickIsMyProduct = () => {
    setIsMyProduct(true);
    setIsMyPoint(false);
    setIsMyProfile(false);
  };

  const onClickIsMyPoint = () => {
    setIsMyPoint(true);
    setIsMyProduct(false);
    setIsMyProfile(false);
  };

  const onClickIsMyProfile = () => {
    setIsMyProfile(true);
    setIsMyProduct(false);
    setIsMyPoint(false);
  };

  return (
    <MyPageContext.Provider value={value}>
      <MyPageUI
        onClickIsMyProduct={onClickIsMyProduct}
        onClickIsMyPoint={onClickIsMyPoint}
        onClickIsMyProfile={onClickIsMyProfile}
      />
    </MyPageContext.Provider>
  );
}
