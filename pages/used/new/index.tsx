import { createContext, useState } from "react";
import CreateProduct from "../../../src/components/units/used/new/CreateProduct.container";
import {
  ICreateProductContext,
  IPropsUsedNewPage,
} from "../../../src/components/units/used/new/CreateProduct.types";

export const CreateProductContext = createContext<ICreateProductContext>({});

export default function UsedNewPage(props: IPropsUsedNewPage) {
  const data = props.data?.fetchUseditem;
  const [wrapperSize, setWrapperSize] = useState(15);
  const [tags, setTags] = useState<string[]>(data?.tags || []);
  const [images, setImages] = useState<(string | File)[]>(data?.images || []);
  const [readerImg, setReaderImg] = useState<string[]>(data?.images || []);
  const [contents, setContents] = useState<string>(data?.contents || "");
  const [isEdit, setIsEdit] = useState<boolean>(props.isEdit || false);
  const [itemInfo, setItemInfo] = useState({ ...props.data });
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [productInput, setProductInput] = useState({
    name: data?.name || "",
    remarks: data?.remarks || "",
    price: data?.price || 0,
  });
  const [address, setAddress] = useState({
    zipcode: data?.useditemAddress?.zipcode || "",
    address: data?.useditemAddress?.address || "",
    addressDetail: data?.useditemAddress?.addressDetail || "",
    lat: data?.useditemAddress?.lat || 0,
    lng: data?.useditemAddress?.lng || 0,
  });
  const [isSearch, setIsSearch] = useState(false);

  const value = {
    wrapperSize,
    setWrapperSize,
    tags,
    setTags,
    images,
    setImages,
    readerImg,
    setReaderImg,
    contents,
    setContents,
    isEdit,
    setIsEdit,
    itemInfo,
    setItemInfo,
    openModal,
    setOpenModal,
    modalMessage,
    setModalMessage,
    productInput,
    setProductInput,
    address,
    setAddress,
    setIsSearch,
    isSearch,
  };

  return (
    <CreateProductContext.Provider value={value}>
      <CreateProduct />
    </CreateProductContext.Provider>
  );
}
