import React from "react";
import * as S from "./styled";

const JobItem = ({ id, data }) => {
  return (
    <S.Container>
      <div key={id}>
        <img height="100" src={data.company_logo} alt={data.company} />
        <h2>{data.company}</h2>
        <strong>{data.type}</strong>
        <a href={data.url}>{data.url}</a>
        {/* <p>{job.description}</p> */}
      </div>
    </S.Container>
  );
};

export default JobItem;
