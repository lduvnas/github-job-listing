import React, { useState, useContext } from "react";
import * as S from "./styled";
import { JobListContext } from "../../contexts/JobListContextProvider";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    setSearchResult,
    previousSearchTerms,
    setPreviousSearchTerms,
  } = useContext(JobListContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      setSearchResult(null);
      return;
    }

    const search = searchTerm.replace(" ", "+");
    const previousSearchResults = previousSearchTerms.find(
      (searchObject) => searchObject.searchTerm === search
    );

    if (previousSearchResults) {
      setSearchResult(previousSearchResults);
    } else {
      fetchJobs(search);
    }

    setSearchTerm("");
  };

  const fetchJobs = (search) => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult({ searchTerm: search, jobs: data });
        setPreviousSearchTerms((prevState) => [
          ...prevState,
          { searchTerm: search, jobs: data },
        ]);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <S.SearchInput
        value={searchTerm}
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <S.Button type="submit">
        <FaSearch />
      </S.Button>
    </form>
  );
};

export default SearchForm;
