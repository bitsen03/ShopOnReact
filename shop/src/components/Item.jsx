import React from "react";
import { useDispatch } from 'react-redux';
import { addOrder } from "../slices/backetSlice";

export default function Item({children}) {
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      dispatch(addOrder(item)); // Вызовите действие при нажатии на кнопку
    };

    return (
        <div className="item">
            <img src={children.images[0]} />
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <b>{children.price}</b>
            <div className="add-to-cart" onClick={() =>handleAddToCart(children)}>+</div>
        </div>
    )
}