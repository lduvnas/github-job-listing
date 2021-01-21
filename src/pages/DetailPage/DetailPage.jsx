import React, { useEffect, useState } from "react";
import * as S from "./styled";
import JobDetail from "../../components/JobDetail";

const DetailPage = (props) => {
  const id = props.match.params.id;
  const [job, setJob] = useState(null);

  const getJob = () => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJob(data));
  };

  useEffect(() => {
    getJob();
  }, []);

  return <S.Container>{job && <JobDetail data={job} />}</S.Container>;
};

export default DetailPage;
