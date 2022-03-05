import { useRouter } from "next/router";
import { createContext, useState } from "react";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  IProductDetailContext,
  IPropsProductDetail,
} from "./ProductDetail.types";

export const ProductDetailContext = createContext<IProductDetailContext>({});

export default function ProductDetail(props: IPropsProductDetail) {
  console.log(props.data?.fetchUseditem.images);
  const router = useRouter();
  const [itemInfo, setItemInfo] = useState({
    _id: props.data?.fetchUseditem._id || "",
    name: props.data?.fetchUseditem.name || "",
    remarks: props.data?.fetchUseditem.remarks || "",
    contents: props.data?.fetchUseditem.contents || "",
    price: props.data?.fetchUseditem.price || 0,
    pickedCount: props.data?.fetchUseditem.pickedCount || 0,
  });
  const [itemAddress, setItemAddress] = useState({
    zipcode: props.data?.fetchUseditem.useditemAddress?.zipcode || "",
    address: props.data?.fetchUseditem.useditemAddress?.address || "",
    addressDetail:
      props.data?.fetchUseditem.useditemAddress?.addressDetail || "",
  });
  const [tags, setTags] = useState([...(props.data?.fetchUseditem.tags || [])]);
  const [images, setImages] = useState([
    ...(props.data?.fetchUseditem.images || []),
  ]);
  const [sellerInfo, setSellerInfo] = useState({
    name: props.data?.fetchUseditem.seller?.name || "",
    picture: props.data?.fetchUseditem.seller?.picture || "",
  });
  const [isInquire, setIsInquire] = useState(false);
  const [requireinput, setRequireInput] = useState("");
  const useditemId = String(router.query.useditemid);
  const [contents, setContents] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isBtn, setIsBtn] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState<any[]>([]);
  const item = props.data?.fetchUseditem;

  const value = {
    itemInfo,
    setItemInfo,
    itemAddress,
    setItemAddress,
    tags,
    setTags,
    images,
    setImages,
    sellerInfo,
    setSellerInfo,
    isInquire,
    setIsInquire,
    requireinput,
    setRequireInput,
    useditemId,
    contents,
    setContents,
    isSubmit,
    setIsSubmit,
    isBtn,
    setIsBtn,
    isAnswer,
    setIsAnswer,
    questionId,
    setQuestionId,
    questionAnswer,
    setQuestionAnswer,
    item,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      <ProductDetailUI />
    </ProductDetailContext.Provider>
  );
}
