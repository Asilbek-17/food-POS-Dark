import { useMemo, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState([]);
    useMemo(async()=>{
    const menuItems = await axios.get("http://localhost:5001/food/1");
    console.log(menuItems.data);
    setMenuItems(menuItems.data);
  },[]);

  return <FoodContext.Provider value={{menuItems, setMenuItems}}>
    {children}
  </FoodContext.Provider>
}