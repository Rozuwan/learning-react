import { createContext } from "react";

export const userContext = createContext();

const DataContext = ({ children }) => {
  const userName = "ram";
  return (
    <div>
      <userContext.Provider value={userName}>{children}</userContext.Provider>
    </div>
  );
};

export default DataContext;
