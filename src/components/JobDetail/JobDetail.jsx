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
      <S.FlexContainer style={{ justifyContent: "space-between" }}>
        <S.CompanyLogo>
          <S.Image src={data.company_logo} alt={data.company} />
        </S.CompanyLogo>

        <S.TitleContainer>
          <S.CompanyName>{data.company}</S.CompanyName>
          <S.JobTitle>{data.title}</S.JobTitle>
          <a href={data.url}>{data.url}</a>
        </S.TitleContainer>

        <S.FlexContainer style={{ flexDirection: "column" }}>
          <S.JobLocation>{data.location}</S.JobLocation>
          <S.JobType>{data.type}</S.JobType>
        </S.FlexContainer>
      </S.FlexContainer>

      <main dangerouslySetInnerHTML={createMarkup()} />

      <S.Button onClick={() => history.push(`/`)}>Go back</S.Button>
    </S.Container>
  );
};

export default JobDetail;
