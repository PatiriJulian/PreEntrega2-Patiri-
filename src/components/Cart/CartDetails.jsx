
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../context/CartContext";
import './CartDetails.css'
function CartDetails(){
    const {cartList, borrarItem, total}=useCartContext ();
    return (<> 
        <ul className='CartDetailUl'>
            {cartList.map (function(item){
                return <li className='CartDetailLi'>
                    <div className='CartDetailLiContainer'>
                        <div>
                            <img className='imgCartDetails' src={item.pic}/>
                        </div>
                        <div>
                            {item.name}, Cantidad: {item.cantidad} <Button className='CartDetailButton' onClick={()=> borrarItem(item.id)}>Borrar</Button>
                        </div>
                    </div>
                    </li>
                    
            })}
        </ul>
        <p>Total:$ {total()}</p>
    </>) 
}

export default CartDetails;
