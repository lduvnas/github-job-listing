import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const JobItem = ({ id, data }) => {
  const history = useHistory();
  return (
    <S.Container onClick={() => history.push(`/job/${id}`)}>
      <S.CompanyLogo>
        <S.Image src={data.company_logo} alt={data.company} />
      </S.CompanyLogo>
      <S.CompanyDetails>
        <S.CompanyName>{data.company}</S.CompanyName>
        <S.JobTitle>{data.title}</S.JobTitle>

        <a href={data.url}>Visit at github jobs</a>
      </S.CompanyDetails>
      <div style={{ width: 150, marginLeft: 20 }}>
        <S.JobLocation>{data.location}</S.JobLocation>
        <S.JobType>{data.type}</S.JobType>
      </div>
      <S.Button onClick={() => history.push(`/job/${id}`)}>Read more</S.Button>
    </S.Container>
  );
};

export default JobItem;
