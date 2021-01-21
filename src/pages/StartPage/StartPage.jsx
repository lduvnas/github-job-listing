import React from "react";
import JobList from "../../components/JobList";
import * as S from "./styled";

const StartPage = () => {
  return (
    <S.Container>
      <h1>StartPage</h1>
      <input />
      <button>Search</button>
      <JobList />
    </S.Container>
  );
};

export default StartPage;
