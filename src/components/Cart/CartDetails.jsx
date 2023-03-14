
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../context/CartContext";
import './CartDetails.css'
function CartDetails(){
    const {cartList, borrarItem, total}=useCartContext ();
    return (<> 
        <ul>
            {cartList.map (function(item){
                return <li><img className='imgCartDetails' src={item.pic}/>{item.name}, Cantidad: {item.cantidad}  <Button onClick={()=> borrarItem(item.id)}>Borrar</Button></li>
            })}
        </ul>
        <p>Total:$ {total()}</p>
    </>) 
}

export default CartDetails;
