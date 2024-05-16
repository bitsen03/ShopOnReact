import React, { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from "../slices/backetSlice";
import { FaCheckCircle } from "react-icons/fa";
import setIsItemInCart from "../help/setIsItemInCart";
import { selectAllbacketItems } from "../slices/backetSlice";
import CategoriesContext from "./CategoriesContext";


export default function Item({children}) {
    const dispatch = useDispatch();
    const allBacet = (useSelector(selectAllbacketItems))
    const {setShowItems, showFullItems, setItem} = useContext(CategoriesContext)

    const handleShowItems = (item) => {
        setShowItems(!showFullItems)
        setItem(item)
    }

    const handleAddToCart = (item) => {
       dispatch(addOrder(item))
    };

    const btnClass = `add-to-cart add` 

    return (
        <div className="item">
            <img src={children.images[0]} alt={children.title} onClick={() => handleShowItems(children)}/>
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <b>{children.price}$</b>
            { !setIsItemInCart(children.id, allBacet) ? <div className={btnClass} onClick={() =>handleAddToCart(children)}>+</div> : 
            <div className={btnClass}><FaCheckCircle></FaCheckCircle></div>}
        </div>
    )
}