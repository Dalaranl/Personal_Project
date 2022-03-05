import { ChangeEvent, useContext } from "react";
import { CreateProductContext } from "../../../../pages/used/new";

export function useOnChange() {
  const { setProductInput, productInput } = useContext(CreateProductContext);
  const createProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;
    if (setProductInput && productInput)
      setProductInput({
        ...productInput,
        [key]: value,
      });
  };

  return { createProduct };
}
