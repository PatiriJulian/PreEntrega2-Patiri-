import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContex';
import './CartWidget.css';
import { Link } from "react-router-dom";


function CartWidget () {
    const{contar} = useCartContext()
    const mostrarTotal=contar()>0
    return(
        <div class= "CartWidget">
            {mostrarTotal ? <i class="numero">{contar()}</i> : <></> }
            <Link to='/carrito'><FaShoppingCart/></Link>
        </div> 

    )
}

export default CartWidget