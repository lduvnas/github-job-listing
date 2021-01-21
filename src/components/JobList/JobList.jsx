import React, { useState, useEffect } from "react";
import JobItem from "../JobItem/JobItem";
import * as S from "./styled";

const JobList = () => {
  const [jobList, setJobList] = useState(null);
  useEffect(() => {
    fetch(
      "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript"
    )
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  return (
    <S.Container>
      <h1>JobList</h1>
      {jobList &&
        jobList.map((item) => {
          return <JobItem id={item.id} data={item} />;
        })}
    </S.Container>
  );
};

export default JobList;
