import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/cartContex';
import './CartWidget.css';
import { Link } from "react-router-dom";


function CartWidget () {
    const{total} = useCartContext()
    const mostrarTotal=total()>0
    return(
        <div class= "CartWidget">
            {mostrarTotal ? <i class="numero">{total()}</i> : <></> }
            <Link to='/carrito'><FaShoppingCart/></Link>
        </div> 

    )
}

export default CartWidget