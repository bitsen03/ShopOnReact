import { selectAllProducts } from "../slices/productsSlice"
import { useSelector } from "react-redux"
import { useContext } from "react";
import CategoriesContext from './Categories'; 

export default function ChooseCategory () {
    const contextValue = useContext(CategoriesContext);
    console.log(contextValue)
    // const category = contextValue.category;
    const allCategory = useSelector(selectAllProducts);
    const uniqCategory = allCategory.map(el => el.category).filter((value, index, self) => self.indexOf(value) === index);
    return uniqCategory.map((el) => <p>{el}</p>)
}   