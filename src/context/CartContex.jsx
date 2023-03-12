import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = ()=> {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] =useState ([])

    //addProduct va a agregar un producto a cartList
    const addProduct=(producto)=>{
        setCartList([...cartList,producto])
    }

    //total va a retornar la cantidad total de items
    const total=()=>{
        return cartList.reduce( (count, producto) => count += producto.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            total,

        }}>
            {children}
        </CartContext.Provider>
    )
}
