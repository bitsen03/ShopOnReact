import React from "react";

const CategoriesContext = React.createContext({});

const Categories = ({ children }) => {
  let category = "all";
  const changeCategory = (item) => (category = item);

  return (
    <CategoriesContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default Categories;
