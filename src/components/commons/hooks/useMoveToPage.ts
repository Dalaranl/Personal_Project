import { useRouter } from "next/router";
import { useContext } from "react";
import { CreateProductContext } from "../../../../pages/used/new";

export function useMoveToPage() {
  const router = useRouter();
  const {
    productInput,
    setModalMessage,
    setOpenModal,
    setWrapperSize,
    wrapperSize,
    setTags,
    setProductInput,
    setImages,
    setContents,
  } = useContext(CreateProductContext);

  const next = () => {
    if (
      productInput?.name === "" ||
      productInput?.remarks === "" ||
      String(productInput?.price) === ""
    ) {
      if (setModalMessage) setModalMessage("필수 입력 사항입니다.");
      if (setOpenModal) setOpenModal(true);
      return;
    }

    if (!/^[1-9][0-9]{0,8}$/.test(String(productInput?.price))) {
      if (setModalMessage) setModalMessage("1이상의 숫자로 시작해야 합니다.");
      if (setOpenModal) setOpenModal(true);
      return;
    }

    if (setWrapperSize) setWrapperSize((prev) => prev - 85);
  };

  const prev = () => {
    if (wrapperSize === 15) return;
    if (setWrapperSize) setWrapperSize((prev) => prev + 85);
  };

  const cancel = () => {
    router.push(`/used/list`);
  };

  const reset = () => {
    if (
      !setProductInput ||
      !setTags ||
      !setImages ||
      !setContents ||
      !setWrapperSize
    )
      return;

    setProductInput({
      ...productInput,
      name: "",
      remarks: "",
      price: 0,
    });
    setTags([]);
    setImages([]);
    setContents("");
    setWrapperSize(15);
  };

  return { next, prev, cancel, reset };
}
