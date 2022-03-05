import { useContext } from "react";
import { CreateProductContext } from "../../../../../../pages/used/new";
import FullSizeButton from "../../../../commons/buttons/fullSize";
import { useCreateUsedItem } from "../../../../commons/hooks/useCreateUseItem";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useUpdateUsedItem } from "../../../../commons/hooks/useUpdateItem";
import * as S from "./PageFooter.emotions";

export default function CreateProductFooter() {
  const { CreateUsedItem } = useCreateUsedItem();
  const { UpdateUsedItem } = useUpdateUsedItem();
  const { next, prev, cancel, reset } = useMoveToPage();
  const { wrapperSize, isEdit } = useContext(CreateProductContext);

  return (
    <S.Wrapper>
      <div className="ButtonWrapper">
        <div className="Button">
          <FullSizeButton name="초기화" onClick={reset} />
        </div>
      </div>
      <div className="ButtonWrapper">
        <div className="Button">
          <FullSizeButton name="이전" onClick={prev} />
        </div>
      </div>
      <div className="ButtonWrapper">
        {isEdit ? (
          <div className="Button">
            {wrapperSize === -240 ? (
              <FullSizeButton name="수정하기" onClick={UpdateUsedItem} />
            ) : (
              <FullSizeButton name="다음" onClick={next} />
            )}
          </div>
        ) : (
          <div className="Button">
            {wrapperSize === -240 ? (
              <FullSizeButton name="등록하기" onClick={CreateUsedItem} />
            ) : (
              <FullSizeButton name="다음" onClick={next} />
            )}
          </div>
        )}
      </div>
      <div className="ButtonWrapper">
        <div className="Button">
          <FullSizeButton name="취소하기" onClick={cancel} />
        </div>
      </div>
    </S.Wrapper>
  );
}
