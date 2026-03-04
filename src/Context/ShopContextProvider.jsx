import { useState } from "react";
import { products } from "../Assets/assets";
import { ShopContext } from './ShopContext'

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const[search,setSearch]=useState('')
  const[showSearch,setShowSearch]=useState(false)

  const value = {
    products,
    currency,
    deliveryFee,
    search,setSearch,showSearch,setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;