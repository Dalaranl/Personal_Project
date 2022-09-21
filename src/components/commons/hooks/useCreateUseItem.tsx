import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext } from "react";
import { CreateProductContext } from "../../../../pages/used/new";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
} from "../../units/used/new/CreateProduct.queries";

export function useCreateUsedItem() {
  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const router = useRouter();
  const { contents, images, tags, productInput, address, setAddress } =
    useContext(CreateProductContext);

  const CreateUsedItem = async () => {
    if (!images) return;
    try {
      const resultsPromise = await Promise.all(
        images?.map((url) =>
          uploadFile({
            variables: {
              file: url,
            },
          })
        )
      );
      const resultUrl = resultsPromise.map((el) =>
        el.data ? el.data.uploadFile.url : ""
      );
        
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: String(productInput?.name),
            remarks: String(productInput?.remarks),
            contents: String(contents),
            price: Number(productInput?.price),
            tags,
            images: resultUrl,
            useditemAddress: {
              zipcode: address?.zipcode,
              address: address?.address,
              addressDetail: address?.addressDetail,
            },
          },
        },
      });
      router.push(`/used/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert("상품 등록에 실패하였습니다");
      }
    }
  };

  const onChangeAddress = (_address: string, zonecode: string) => {
    if (setAddress && address)
      setAddress({
        ...address,
        zipcode: zonecode,
        address: _address,
      });
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    if (setAddress && address)
      setAddress({
        ...address,
        addressDetail: e.target.value,
      });
  };

  return {
    CreateUsedItem,
    onChangeAddress,
    onChangeAddressDetail,
  };
}
