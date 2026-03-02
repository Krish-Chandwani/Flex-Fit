import { products } from "../Assets/assets";
import { ShopContext } from './ShopContext'

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;