import { useContext } from "react"
import CategoriesContext from "./CategoriesContext"
import Item from "./Item"
import { MdClose } from "react-icons/md";

export default function ShowFullItems() {
    const { showFullItems, item, setShowItems } = useContext(CategoriesContext)
    return (
    <>
        {showFullItems && <div className="full-item">
        <div>
        <MdClose onClick={() => setShowItems(!showFullItems)} className="exit-fullScrean"></MdClose>
        <Item>{item}</Item>
        </div>
        </div>}
    </>
    )
}