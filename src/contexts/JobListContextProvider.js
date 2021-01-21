import React, { createContext, useState } from "react";

export const JobListContext = createContext({});

export default function JobListContextProvider({ children }) {
  const [jobList, setJobList] = useState(null);

  return (
    <JobListContext.Provider value={{ jobList, setJobList }}>
      {children}
    </JobListContext.Provider>
  );
}
