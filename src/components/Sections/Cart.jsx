import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContex";
import CartDetails from "../Cart/CartDetails";
import Formulario from "../Formulario/Formulario";


function Cart(){
    const [orderId, setOrderId] = useState()
    const {contar, vaciarItems, total, cartList} =useCartContext ()
    const hayProductos=contar()>0
    const generarOrden = (datos)=>{
        const order= {}
        order.buyer = {...datos}
        order.total = total()
        order.productos = cartList.map(({id, name, price}) =>({id, name, price}))

        const db = getFirestore()
        const queryCollection = collection(db, 'Ordenes')

        addDoc(queryCollection, order)
        .then(resp => {
            vaciarItems()
            setOrderId(resp.id)
        } )
        .catch(err => console.log(err))
        .finally(() => {})
    }
        return(
            <div className="cartWrapper">   
                {hayProductos || orderId? 
                <>
                    {orderId ? 
                <>
                  <h1>Orden generada: {orderId}</h1>
                    <p><Link to='/'> Click aqui para ir al home </Link></p> 
                </> : 
                <> 
                     <CartDetails/>
                    <div><Button onClick={()=>vaciarItems()}>Vaciar Carrito</Button></div>
                    <Formulario enviar={generarOrden}/> 
                    
                </> } 
                </> : 
                <> 
                    <h1>Carrito Vacio</h1>
                    <p><Link to='/'> Click aqui para ir al home </Link></p>
                    
                </> }
            </div>
        )
}




export default Cart;