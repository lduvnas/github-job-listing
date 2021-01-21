import React from "react";
import JobItem from "../JobItem/JobItem";
import * as S from "./styled";

const JobList = ({ jobList }) => {
  const jobs = Object.entries(jobList.jobs);
  return (
    <S.Container>
      <h1>JobList</h1>
      {jobs &&
        Array.isArray(jobs) &&
        jobs.map((job) => {
          return <JobItem id={job[1].id} key={job[1].id} data={job[1]} />;
        })}
    </S.Container>
  );
};

export default JobList;
