import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from "../slices/backetSlice";
import classNames from 'classnames';
import { FaCheckCircle } from "react-icons/fa";
import setIsItemInCart from "../help/setIsItemInCart";
import { selectAllbacketItems } from "../slices/backetSlice";


export default function Item({children}) {
    const dispatch = useDispatch();
    const allBacet = (useSelector(selectAllbacketItems))

    const handleAddToCart = (item) => {
       dispatch(addOrder(item))
    };
    const btnClass = classNames(`add-to-cart`, 'add', {

    });

    return (
        <div className="item">
            <img src={children.images[0]} />
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <b>{children.price}$</b>
            { !setIsItemInCart(children.id, allBacet) ? <div className={btnClass} onClick={() =>handleAddToCart(children)}>+</div> : 
            <div className={btnClass}><FaCheckCircle></FaCheckCircle></div>}
        </div>
    )
}