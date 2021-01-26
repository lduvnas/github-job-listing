import React, { useEffect, useState } from "react";
import * as S from "./styled";
import JobDetail from "../../components/JobDetail";

const DetailPage = (props) => {
  const id = props.match.params.id;
  const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
  const [job, setJob] = useState(null);

  const fetchJob = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJob(data));
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return <S.Container>{job && <JobDetail data={job} />}</S.Container>;
};

export default DetailPage;
