import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/cartContex';
import './CartWidget.css';

function CartWidget () {
    const{cartList} = useCartContext()
    return(
        <div class= "CartWidget"><i class="numero">{cartList.length}</i> <FaShoppingCart/></div> 

    )
}

export default CartWidget