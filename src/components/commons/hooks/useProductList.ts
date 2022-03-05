import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";

export function useProductList() {
  const router = useRouter();
  const [isHover, setIsHover] = useState("");
  const pickRef = useRef<HTMLDivElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);

  const onMouseOver = () => {
    setIsHover("isHover");

    if (pickRef.current) pickRef.current.style.top = "40%";
    if (basketRef.current) basketRef.current.style.top = "40%";
  };

  const onMouseOut = () => {
    setIsHover("");

    if (pickRef.current) pickRef.current.style.top = "150%";
    if (basketRef.current) basketRef.current.style.top = "120%";
  };

  const onClickMoveToNew = () => {
    router.push("/used/new");
  };

  const onClickMoveToDetail = (_id: string, item: IUseditem) => () => {
    const today = JSON.parse(sessionStorage.getItem("basket") || "[]");

    if (today.length === 4) today.splice(0, 1);

    const temp = today.filter((todayItme: IUseditem) => todayItme._id === _id);

    if (temp.length === 1) {
      router.push(`/used/${_id}`);
      return;
    }

    const { __typename, ...rest } = item;

    today.push(rest);
    sessionStorage.setItem("basket", JSON.stringify(today));

    router.push(`/used/${_id}`);
  };

  return {
    isHover,
    onMouseOut,
    onMouseOver,
    pickRef,
    basketRef,
    onClickMoveToNew,
    onClickMoveToDetail,
  };
}
