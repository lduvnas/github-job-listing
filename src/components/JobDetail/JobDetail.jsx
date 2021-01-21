import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const JobDetail = ({ data }) => {
  const history = useHistory();
  const createMarkup = () => {
    return { __html: data.description };
  };
  return (
    <S.Container>
      <h1>JobDetail</h1>
      <img height="100" src={data.company_logo} alt={data.company} />
      <h2>{data.company}</h2>
      <strong>{data.type}</strong>
      <a href={data.url}>{data.url}</a>
      {/* <p>{job.description}</p> */}
      <main dangerouslySetInnerHTML={createMarkup()} />

      <button onClick={() => history.goBack()}>Go back</button>
    </S.Container>
  );
};

export default JobDetail;
