import Items from "./Items"
import ChooseCategory from './ChooseCategory';
import Categories from "./Categories";

export default function Main (){

    return (
    <Categories>
        <ChooseCategory />
        <Items />
    </Categories>
    )
}