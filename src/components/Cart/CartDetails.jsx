import { useCartContext } from "../../context/cartContex";
import Button from 'react-bootstrap/Button';

function CartDetails(){
    const {cartList, borrarItem}=useCartContext ()
    return (<> 
        <ul>
            {cartList.map (function(item){
                return <li>{item.name}, Cantidad: {item.cantidad}  <Button onClick={()=> borrarItem(item.id)}>Borrar</Button></li>
            })}
        </ul>
    </>) 
}

export default CartDetails;
