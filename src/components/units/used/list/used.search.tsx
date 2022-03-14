import { ChangeEvent, useContext } from "react";
import { UsedListContext } from "../../../../../pages/used/list";
import * as S from "./Used.emotions";

export default function UsedSearch() {
  const { onClickSearch, onPressSearch, setSearch } =
    useContext(UsedListContext);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch && setSearch(e.target.value);
  };

  return (
    <S.Search>
      <S.SearchInput
        onChange={onChangeSearch}
        onKeyPress={onPressSearch}
        placeholder="Search"
      />
      <S.SearchBtn onClick={onClickSearch}>검색</S.SearchBtn>
    </S.Search>
  );
}
