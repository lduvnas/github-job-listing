import React, { useContext } from "react";
import JobItem from "../JobItem/JobItem";
import { JobListContext } from "../../contexts/JobListContextProvider";
import * as S from "./styled";

const JobList = ({ jobList }) => {
  const { searchResult } = useContext(JobListContext);
  return (
    <S.Container>
      {jobList && jobList.length !== 0 ? (
        <S.SearchResults>
          Search results for "{searchResult.searchTerm}"
        </S.SearchResults>
      ) : (
        ""
      )}
      {jobList.length === 0 ? (
        <p>No search results found</p>
      ) : (
        jobList.map((job) => {
          return <JobItem id={job.id} key={job.id} data={job} />;
        })
      )}
    </S.Container>
  );
};

export default JobList;
