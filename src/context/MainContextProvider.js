import React, { createContext, useState, useEffect } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('bmiData');
    if (storedData) {
      setLocalData(JSON.parse(storedData));
    }
  }, []);

  const addData = (newData) => {
    setLocalData((prevData) => {
      const updatedData = [...prevData, newData];
      localStorage.setItem('bmiData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <MainContext.Provider value={{ localData, addData }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
