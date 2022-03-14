import {
  ChangeEvent,
  Fragment,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import { CreateProductContext } from "../../../../../../../pages/used/new";
import { useOnChange } from "../../../../../commons/hooks/useInput";
import FullSizeInput from "../../../../../commons/inputs/fullSize";
import CreateProductFooter from "../PageFooter";
import { v4 as uuidv4 } from "uuid";
import * as S from "../Pages.emotions";

export default function CreateProductFirstPage() {
  const { setTags, isEdit, productInput, tags } =
    useContext(CreateProductContext);
  const [tagInput, setTagInput] = useState("");

  const { createProduct } = useOnChange();

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!tags || !setTags) return;

    if (value.length > 8) {
      alert("길이가 맞지 않습니다.(1 ~ 10글자)");
      return;
    }

    if (value.includes(",")) {
      addTag();
      return;
    }

    setTagInput(value);
  };

  const addTag = () => {
    if (!tags || !setTags) return;
    if (tags.includes("#" + tagInput)) {
      setTagInput("");
      return;
    }
    if (tags.length === 4) {
      tags.splice(0, 1);
      const temp = tags;
      setTags([...temp, "#" + tagInput]);
      setTagInput("");
    } else {
      setTags((prev) => [...prev, "#" + tagInput]);
      setTagInput("");
    }
  };

  const onKeyPressTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!tags || !setTags) return;

    if (e.key === "Enter") {
      if (tags.includes("#" + tagInput)) {
        setTagInput("");
        return;
      }
      if (tags.length === 4) {
        tags.splice(0, 1);
        const temp = tags;
        setTags([...temp, "#" + tagInput]);
        setTagInput("");
      } else {
        setTags((prev) => [...prev, "#" + tagInput]);
        setTagInput("");
      }
    }
  };

  const onClickDeleteTag = (tag: string) => () => {
    const temp = tags?.filter((el) => el !== tag);
    if (setTags && temp) setTags([...temp]);
  };

  const onKeyDownDelete = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !tagInput.length) {
      if (!tags?.length) return;

      const temp = tags?.slice(0, tags.length - 1);

      if (temp && setTags) setTags([...temp]);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <span>{isEdit ? "상품 수정" : "상품 등록"}</span>
      </S.Header>
      <S.BodyWrapper>
        <S.Body>
          <div className="bodyDivide">
            <S.BodyHeader>
              <span>상품명</span>
            </S.BodyHeader>
            <S.BodyMain>
              <div className="input">
                <FullSizeInput
                  type="text"
                  name="name"
                  readOnly={false}
                  placeholder=""
                  onChange={createProduct}
                  defaultValue={productInput?.name}
                />
              </div>
            </S.BodyMain>
          </div>
          <div className="bodyDivide">
            <S.BodyHeader>
              <span>한줄요약</span>
            </S.BodyHeader>
            <S.BodyMain>
              <div className="input">
                <FullSizeInput
                  type="text"
                  name="remarks"
                  readOnly={false}
                  placeholder=""
                  onChange={createProduct}
                  defaultValue={productInput?.remarks}
                />
              </div>
            </S.BodyMain>
          </div>
          <div className="bodyDivide">
            <S.BodyHeader>
              <span>판매가격</span>
            </S.BodyHeader>
            <S.BodyMain>
              <div className="input">
                <FullSizeInput
                  type="text"
                  name="price"
                  readOnly={false}
                  placeholder=""
                  onChange={createProduct}
                  defaultValue={productInput?.price}
                />
              </div>
            </S.BodyMain>
          </div>
          <div className="bodyDivide">
            <S.BodyHeader>
              <span>태그</span>
            </S.BodyHeader>
            <S.BodyMain>
              <S.BodyTagWrapper>
                {tags?.map((tag) => (
                  <Fragment key={uuidv4()}>
                    <S.Tag onClick={onClickDeleteTag(tag)}>
                      <S.TagBox>
                        <div>
                          <span>{tag}</span>
                        </div>
                      </S.TagBox>
                    </S.Tag>
                  </Fragment>
                ))}
                <S.TagInput
                  type="text"
                  onChange={onChangeTag}
                  onKeyDown={onKeyDownDelete}
                  onKeyPress={onKeyPressTag}
                  value={tagInput}
                />
              </S.BodyTagWrapper>
            </S.BodyMain>
          </div>
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
