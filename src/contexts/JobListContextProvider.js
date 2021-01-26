import React, { createContext, useState } from "react";

export const JobListContext = createContext({});

export default function JobListContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState(null);
  const [previousSearchTerms, setPreviousSearchTerms] = useState([]);

  return (
    <JobListContext.Provider
      value={{
        searchResult,
        setSearchResult,
        previousSearchTerms,
        setPreviousSearchTerms,
      }}
    >
      {children}
    </JobListContext.Provider>
  );
}
