import { useContext } from "react";
import { createContext, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [grid, setGrid] = useState(4);
  return (
    <DataContext.Provider value={{ grid, setGrid }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataProvider = () => {
  return useContext(DataContext);
};
