import {Input} from "@fluentui/react-northstar";
import {SearchIcon} from "@fluentui/react-icons-northstar";
import React from "react";
import * as S from "./Header.style";

interface SearchBarProps {

}

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  return (
    <S.SearchBarWrapper>
      <Input fluid icon={<SearchIcon/>} placeholder="Tìm kiếm..." iconPosition="start" clearable/>
    </S.SearchBarWrapper>
  )
}

export default SearchBar;