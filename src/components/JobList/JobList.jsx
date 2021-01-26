import React from "react";
import JobItem from "../JobItem/JobItem";
import * as S from "./styled";

const JobList = ({ jobList }) => {
  return (
    <S.Container>
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
