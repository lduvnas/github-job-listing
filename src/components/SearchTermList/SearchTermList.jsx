import React from "react";
import * as S from "./styled";

const SearchTermList = ({ jobList }) => {
  return <S.Container>{jobList.term}</S.Container>;
};

export default SearchTermList;
