import React from "react";
import { useDispatch } from 'react-redux';
import { addOrder, removeOrder } from "../slices/backetSlice";
import { useState } from "react";
import classNames from 'classnames';

export default function Item({children}) {
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      active ? dispatch(addOrder(item)) : dispatch(removeOrder(item.id));
      setActive(!active);
    };
    const btnClass = classNames(`add-to-cart`, {
        active: active,
        delete: !active,
        add: active,
    });

    return (
        <div className="item">
            <img src={children.images[0]} />
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <b>{children.price}$</b>
            <div className={btnClass} onClick={() =>handleAddToCart(children)}>{active ? '+' : '-'}</div>
        </div>
    )
}