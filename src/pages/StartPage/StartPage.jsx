import React, { useState, useContext } from "react";
import JobList from "../../components/JobList";
import * as S from "./styled";
import { JobListContext } from "../../contexts/JobListContextProvider";
import SearchTermList from "../../components/SearchTermList";

const StartPage = () => {
  const { jobList, setJobList } = useContext(JobListContext);
  const [searchTerm, setSearchTerm] = useState("");
  const url =
    "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url + searchTerm.replace(" ", "+"))
      .then((res) => res.json())
      .then((data) => setJobList({ term: searchTerm, jobs: data }));
  };

  return (
    <S.Container>
      <h1>StartPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder=""
        />
        <button type="submit">Search</button>
      </form>

      {jobList && <SearchTermList jobList={jobList} />}
      {jobList && <JobList jobList={jobList} />}
      {jobList && Array.isArray(jobList.jobs) && jobList.jobs.length <= 0 && (
        <h2>No jobs found</h2>
      )}
    </S.Container>
  );
};

export default StartPage;
