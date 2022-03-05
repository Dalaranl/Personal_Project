import * as S from "./today.emotions";
import { IUseditem } from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useRef } from "react";

const STORAGE = "https://storage.googleapis.com/";

interface IProps {
  item: IUseditem;
}

export default function Today(props: IProps) {
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);
  const item = props.item;

  const onClickMoveToDetail = (_id: string) => () => {
    router.push(`/used/${_id}`);
  };

  const onClickDelete = (_id: string) => () => {
    const basket = JSON.parse(sessionStorage.getItem("basket") || "");
    const filter = basket.filter((today: IUseditem) => today._id !== _id);

    sessionStorage.setItem("basket", JSON.stringify(filter));

    window.location.reload();
  };

  const onMouseOver = () => {
    const div = divRef.current;

    if (div) div.style.top = "-100%";
  };

  const onMouseOut = () => {
    const div = divRef.current;

    if (div) div.style.top = "-206%";
  };

  return (
    <S.Wrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <S.TodayWrapper>
        <S.Image>
          {item.images && item?.images[0] ? (
            <img src={STORAGE + item.images[0]} />
          ) : (
            <>
              <img src="/img/ItemNoImg.png" />
              <div>
                <span>No Image</span>
              </div>
            </>
          )}
        </S.Image>
        <S.Info>
          <S.Title>
            <span>{item.name}</span>
          </S.Title>
          <S.Price>
            <span>₩ {item.price}원</span>
          </S.Price>
        </S.Info>
      </S.TodayWrapper>
      <S.TodayFunction ref={divRef}>
        <S.Move onClick={onClickMoveToDetail(item._id)}>
          <span>상세보기</span>
        </S.Move>
        <S.Delete onClick={onClickDelete(item._id)}>
          <span>삭제하기</span>
        </S.Delete>
      </S.TodayFunction>
    </S.Wrapper>
  );
}
