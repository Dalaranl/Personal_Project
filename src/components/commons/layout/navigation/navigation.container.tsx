import { useRouter } from "next/router";
import LayoutNavigationUI from "./navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickToMove = () => {
    router.push(`/boards/list`);
  };
  return <LayoutNavigationUI onClickToMove={onClickToMove} />;
}
