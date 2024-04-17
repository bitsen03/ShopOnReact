import { useState } from "react";
import React from "react";
import products from "./prodocts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

export const ItemsContext = React.createContext({});

const ItemsProvider = ({children}) => {
  const items = products.products;
  const [item, setItem] = useState(items[0]);

 return (
 <ItemsContext.Provider value={{items, item, setItem}}>
    {children}
  </ItemsContext.Provider> 
  );
}

function App() {


  return (
    <div className="wrapper">
      <Header />
      <ItemsProvider>
        <Items />
      </ItemsProvider>
      <Footer />
    </div>
  );
}

export default App;
