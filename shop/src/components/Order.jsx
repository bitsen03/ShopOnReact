import { removeOrder } from "../slices/backetSlice";
import { useDispatch } from "react-redux";

export default function Order ({children}) {
    const dispatch = useDispatch();

    const handleRemoveOrder = (id) => {
        dispatch(removeOrder(id));
    }

    return (
        <div className='item-oreder'>
        <h3>{children.title}</h3>
        <p>{children.price}$</p>
        <b className='delete-item delete' onClick={() => handleRemoveOrder(children.id)}>-</b>
      </div>
    );
}