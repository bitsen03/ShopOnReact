import { createContext } from 'react';

const CategoriesContext = createContext({});

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
