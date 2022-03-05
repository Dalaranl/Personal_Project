import CreateProductFooter from "../PageFooter";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "./reactQuill";
import * as S from "../Pages.emotions";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateProductSecondPage() {
  return (
    <S.Wrapper>
      <S.Header>
        <span>상품 등록</span>
      </S.Header>
      <S.BodyWrapper>
        <S.Body>
          <S.ContentsHeader>
            <span>상세내용</span>
          </S.ContentsHeader>
          <S.ContentsBody>
            <ReactQuill />
          </S.ContentsBody>
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
