import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/cartContex';
import './CartWidget.css';

function CartWidget () {
    const{total} = useCartContext()
    return(
        <div class= "CartWidget"><i class="numero">{total()}</i> <FaShoppingCart/></div> 

    )
}

export default CartWidget