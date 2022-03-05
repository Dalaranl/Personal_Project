import { useRouter } from "next/router";
import LayoutNavigationUI from "./navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    router.push("/");
  };

  const onClickMoveToFreeboard = () => {
    router.push(`/boards/list`);
  };

  const onClickMoveToMyProfile = () => {
    router.push("/mypage");
  };

  const onClickMoveToUsed = () => {
    router.push("/used/list");
  };

  const onClickMoveToGiphy = () => {
    router.push("/giphy");
  };
  const onClickMoveToGiphyHistory = () => {
    router.push("/giphy/history");
  };
  return (
    <LayoutNavigationUI
      onClickMoveToFreeboard={onClickMoveToFreeboard}
      onClickMoveToHome={onClickMoveToHome}
      onClickMoveToGiphy={onClickMoveToGiphy}
      onClickMoveToGiphyHistory={onClickMoveToGiphyHistory}
      onClickMoveToUsed={onClickMoveToUsed}
      onClickMoveToMyProfile={onClickMoveToMyProfile}
    />
  );
}
