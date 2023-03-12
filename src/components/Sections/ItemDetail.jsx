import { useParams } from "react-router-dom";
import productos from "../../datos/productos";
import ProductDetail from "../ProductDetail/ProductDetail"


function ItemDetail () {
    const {id} =useParams()
    const producto=productos.find ((item)=>{
        return id===item.id
    })
    return(
        <>
        <ProductDetail item={producto} />
        </>
    )
}
export default ItemDetail;