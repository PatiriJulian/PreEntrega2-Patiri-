import { useCartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';

function CartDetails(){
    const {cartList, borrarItem, total}=useCartContext ()
    return (<> 
        <ul>
            {cartList.map (function(item){
                return <li>{item.name}, Cantidad: {item.cantidad}  <Button onClick={()=> borrarItem(item.id)}>Borrar</Button></li>
            })}
        </ul>
        <p>Total:$ {total()}</p>
    </>) 
}

export default CartDetails;
