import { useRouter } from "next/router";
import LayoutHeaderUI from "./Header.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickCreate = () => {
    router.push("/account");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  return (
    <LayoutHeaderUI onClickCreate={onClickCreate} onClickLogin={onClickLogin} />
  );
}
