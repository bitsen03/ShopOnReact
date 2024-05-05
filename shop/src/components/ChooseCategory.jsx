import { selectAllProducts } from "../slices/productsSlice"
import { useSelector } from "react-redux"
import { useContext } from "react";
import CategoriesContext from './CategoriesContext'; 

export default function ChooseCategory () {
    const {setCategory} = useContext(CategoriesContext);
    const allCategory = useSelector(selectAllProducts);
    const uniqCategory = allCategory.map(el => el.category).filter((value, index, self) => self.indexOf(value) === index);
    return (
        <div className="category-div">
             <button className="category-btn" onClick={() => setCategory('all')}>all</button>
            {uniqCategory.map((el) => <button className="category-btn" onClick={() => setCategory(el)}>{el}</button>)}
        </div>
    )
}   