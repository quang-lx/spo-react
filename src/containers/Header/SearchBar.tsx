import {Input} from "@fluentui/react-northstar";
import {SearchIcon} from "@fluentui/react-icons-northstar";
import React from "react";

interface SearchBarProps {

}

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  return (
    <Input fluid icon={<SearchIcon/>} placeholder="Tìm kiếm..." iconPosition="start" clearable/>
  )
}

export default SearchBar;