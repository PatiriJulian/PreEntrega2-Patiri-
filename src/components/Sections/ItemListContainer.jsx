import { useState } from "react"
import { useParams } from "react-router-dom";
import productos from "../../datos/productos"
import CardItem from "../CardItem/CardItem"


function ItemListContainer(props) {
    
    const [items, setItems] =useState(productos);
    const {category} =useParams()
    
    
    return (
        <>
       {items.filter((producto)=>{
        if (category){
            return category===producto.category
        }else {
            return true
        }
       }).map(function(item){
        return <CardItem item={item}/>
       })}
       </>
    )
}
export default ItemListContainer