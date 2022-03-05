import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CreateProductContext } from "../../../../pages/used/new";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import {
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "../../units/used/new/CreateProduct.queries";

export function useUpdateUsedItem() {
  const router = useRouter();
  const [updateUsedItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const { contents, images, tags, productInput, address } =
    useContext(CreateProductContext);

  const UpdateUsedItem = async () => {
    if (!images) return;
    try {
      const unedited = images.map((el) => {
        if (typeof el === "string") return el;
        else return "";
      });
      const edited = images.filter((el) => typeof el !== "string");
      let num = 0;

      const resultsPromise = await Promise.all(
        edited?.map((url) =>
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

      const resultImg = unedited.map((el) => {
        if (el === "") {
          const temp = resultUrl[num];
          num++;
          return temp;
        } else return el;
      });

      await updateUsedItem({
        variables: {
          updateUseditemInput: {
            name: productInput?.name,
            remarks: productInput?.remarks,
            price: Number(productInput?.price),
            contents: String(contents),
            tags,
            images: resultImg,
            useditemAddress: {
              address: address?.address,
              addressDetail: address?.addressDetail,
            },
          },
          useditemId: String(router.query.useditemid),
        },
      });
      router.push(`/used/${router.query.useditemid}`);
    } catch (error) {
      if (error instanceof Error) {
        alert("수정에 실패하였습니다.");
        console.log(error.message);
      }
    }
  };
  return { UpdateUsedItem };
}
