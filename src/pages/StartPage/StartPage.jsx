import React, { useState, useEffect } from "react";
import * as S from "./styled";

const StartPage = () => {
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
      <h1>StartPage</h1>
      <input />
      <button>Search</button>

      {jobList &&
        jobList.map((item) => {
          return (
            <div key={item.id}>
              <img height="100" src={item.company_logo} alt="logo" />
              <h2>{item.company}</h2>
              <strong>{item.type}</strong>
              <a>{item.url}</a>
              {/* <p>{item.description}</p> */}
            </div>
          );
        })}
    </S.Container>
  );
};

export default StartPage;
