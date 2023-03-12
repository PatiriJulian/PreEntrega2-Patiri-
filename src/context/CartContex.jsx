import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = ()=> {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] =useState ([])

    return(
        <CartContext.Provider value={{
            cartList,
        }}>
            {children}
        </CartContext.Provider>
    )
}
