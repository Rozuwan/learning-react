import { createContext } from "react";
export const DataContext = createContext();

const UserContext = ({ children }) => {
  const userName = "Roshan";

  return (
    
      <DataContext.Provider value={userName}>
        {children}
        </DataContext.Provider>
  
  );
};

export default UserContext;
