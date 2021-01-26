import React, { useContext } from "react";
import JobList from "../../components/JobList";
import * as S from "./styled";
import { JobListContext } from "../../contexts/JobListContextProvider";
import SearchForm from "../../components/SearchForm";

const StartPage = () => {
  const { searchResult } = useContext(JobListContext);

  return (
    <S.Container>
      <SearchForm />
      {searchResult && <JobList jobList={searchResult.jobs} />}
    </S.Container>
  );
};

export default StartPage;
