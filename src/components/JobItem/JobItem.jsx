import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const JobItem = ({ id, data }) => {
  const history = useHistory();

  return (
    <S.Container onClick={() => history.push(`/job/${id}`)}>
      <img height="100" src={data.company_logo} alt={data.company} />
      <h2>{data.company}</h2>
      <strong>{data.type}</strong>
      <a href={data.url}>{data.url}</a>
    </S.Container>
  );
};

export default JobItem;
