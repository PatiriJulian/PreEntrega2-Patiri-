import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContex";
import CartDetails from "../Cart/CartDetails";
import Formulario from "../Formulario/Formulario";


function Cart(){
    const {contar, vaciarItems} =useCartContext ()
    const mostrar=contar()>0
        return(
            <div className="cartWrapper">   
                {mostrar ? 
                <>
                    <CartDetails/>
                    <div><Button onClick={()=>vaciarItems()}>Vaciar Carrito</Button></div>
                    <Formulario/>
                </> : 
                <> 
                    <h1>Carrito Vacio</h1>
                    <p><Link to='/'> Click aqui para ir al home </Link></p>
                    
                </> }
            </div>
        )
}




export default Cart;