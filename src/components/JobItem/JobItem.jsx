import React from "react";
import * as S from "./styled";

const JobItem = ({ id, job }) => {
  return (
    <S.Container>
      <div key={id}>
        <img height="100" src={job.company_logo} alt="logo" />
        <h2>{job.company}</h2>
        <strong>{job.type}</strong>
        <a>{job.url}</a>
        {/* <p>{job.description}</p> */}
      </div>
    </S.Container>
  );
};

export default JobItem;
