import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_USEDITEMS_ISOLD,
  FETCH_USEDITEMS_IBOUGHT,
  FETCH_USEDITEMS_IPICKED,
  FETCH_USEDITEMS_COUNTISOLD,
  FETCH_USEDITEMS_COUNTIBOUGHT,
  FETCH_USEDITEMS_COUNTIPICKED,
} from "../MyPage.queries";
import { MyProductUI } from "./MyProduct.presenter";
import _ from "lodash";

export function MyProduct() {
  const { data: sold, refetch: soldRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_ISOLD);
  const { data: soldCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_USEDITEMS_COUNTISOLD);

  const { data: bought, refetch: boughtRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USEDITEMS_IBOUGHT);
  const { data: boughtCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">
  >(FETCH_USEDITEMS_COUNTIBOUGHT);

  const { data: picked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED);
  const { data: pickedCount, refetch: pickedRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USEDITEMS_COUNTIPICKED);

  const [isSold, setIsSold] = useState(true);
  const [isBought, setIsBought] = useState(false);
  const [isPicked, setIsPicked] = useState(false);

  const onClickIsSold = () => {
    setIsSold(true);
    setIsBought(false);
    setIsPicked(false);
  };

  const onClickIsBought = () => {
    setIsBought(true);
    setIsSold(false);
    setIsPicked(false);
  };

  const onClickIsPicked = () => {
    setIsPicked(true);
    setIsSold(false);
    setIsBought(false);
  };

  const onChangeSoldPage = (page: number, pageSize: number) => {
    soldRefetch({
      page,
    });
  };

  const onChangeBoughtPage = (page: number, pageSize: number) => {
    boughtRefetch({
      page,
    });
  };

  const onChangePickedPage = (page: number, pageSize: number) => {
    pickedRefetch({
      page,
    });
  };

  const getDebounce = _.debounce((el) => {
    if (isSold) {
      soldRefetch({
        search: el,
        page: 1,
      });
      return;
    }

    if (isPicked) {
      pickedRefetch({
        search: el,
        page: 1,
      });
      return;
    }

    if (isBought) {
      boughtRefetch({
        search: el,
        page: 1,
      });
    }
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  return (
    <MyProductUI
      sold={sold}
      soldCount={soldCount?.fetchUseditemsCountISold}
      bought={bought}
      boughtCount={boughtCount?.fetchUseditemsCountIBought}
      picked={picked}
      pickedCount={pickedCount?.fetchUseditemsCountIPicked}
      isSold={isSold}
      isBought={isBought}
      isPicked={isPicked}
      onChangeSearch={onChangeSearch}
      onChangeSoldPage={onChangeSoldPage}
      onClickIsSold={onClickIsSold}
      onClickIsBought={onClickIsBought}
      onClickIsPicked={onClickIsPicked}
      onChangeBoughtPage={onChangeBoughtPage}
      onChangePickedPage={onChangePickedPage}
    />
  );
}
