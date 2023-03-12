import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContex";
import CartDetails from "../Cart/CartDetails";

function Cart(){
    const {cartList, total} =useCartContext ()
    const mostrar=total()>0
        return(
            <div className="cartWrapper">   
                {mostrar ? <CartDetails/> : 
                <> 
                    <h1>Carrito Vacio</h1>
                    <p><Link to='/'> Click aqui para ir al home </Link></p>
                </> }
            </div>
        )
}

export default Cart;