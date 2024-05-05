import Items from "./Items"
import ChooseCategory from './ChooseCategory'
import CategoriesContext from "./CategoriesContext";
import { useState } from "react";
import ShowFullItems from "./ShowFullItems";

const CategoriesProvider  = ({ children }) => {
    const [category, setCategory] = useState('all');
    const [showFullItems, setShowItems] = useState(false)
    const [item, setItem] = useState({})

    return (
      <CategoriesContext.Provider value={{category, setCategory, showFullItems, setShowItems, item, setItem}}>
        {children}
      </CategoriesContext.Provider>
    );
  };

export default function Main (){
    return (
    <CategoriesProvider>
        <ChooseCategory />
        <Items />
        <ShowFullItems />
    </CategoriesProvider>
    )
}