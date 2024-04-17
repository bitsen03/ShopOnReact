import React from "react";

export default function Item({children}) {
    return (
        <div className="item">
            <img src={children.images[0]} />
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <b>{children.price}</b>
            <div className="add-to-cart">+</div>
        </div>
    )
}