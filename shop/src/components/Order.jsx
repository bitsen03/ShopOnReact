import { removeOrder, addOrder } from "../slices/backetSlice";
import { useDispatch } from "react-redux";

export default function Order ({children}) {
    const dispatch = useDispatch();

    const handleAddToOrder = () => {
        dispatch(addOrder(children))
    }

    const handleRemoveOrder = () => {
        dispatch(removeOrder(children));
    }

    return (
        <div className='item-oreder'>
        <h3>{children.title}</h3>
        <p>{children.price}$</p>
        <h3 className="count">{children.count}</h3>
        <b className='delete-item add' onClick={() => handleAddToOrder(children.id)}>+</b>
        <b className='delete-item delete' onClick={() => handleRemoveOrder(children.id)}>-</b>
      </div>
    );
}