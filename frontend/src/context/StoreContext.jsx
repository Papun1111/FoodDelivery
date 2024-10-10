import { createContext, useEffect, useState } from "react";
import axios from "axios";
import uri from "../../environment";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = uri.deployment;
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async(itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if(token){
await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
    }
    
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };

      if (updatedCart[itemId] <= 0) {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
    }
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const itemInfo = food_list.find((product) => product._id === itemId);
      return itemInfo ? total + itemInfo.price * cartItems[itemId] : total;
    }, 0);
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };
  const loadCartData=async (token) => {
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };

   

    loadData();
  }, []);

  const contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;