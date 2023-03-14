import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './ProductDetail.css';


function ProductDetail(props) {
  const [cantidad, setCantidad]=useState(1);
  const sumar=()=>{
    setCantidad(cantidad+1)
  }
  const restar=()=>{
    setCantidad(cantidad-1)
  } 

  const {addProduct}=useCartContext()

  const agregar=()=>{
    addProduct({...props.item, cantidad})
  }
  
  return (
    <div className='ContenedorDetail'>
      <div className='ContenedorImgDetail'>
        <h1 className='TituloDetail'>{props.item.name}</h1>
        <p className='CategoriaDetail'>Categoria: {props.item.category}</p>
        <p className='CategoriaDetail'>Precio: ${props.item.price}</p>
        <img className='ImgDetail' src={props.item.pic} alt="" />
      </div>
      <div className='ContenedorCompra'>
        <div>
        <p>Agregar al carrito {cantidad} Productos</p>
          <div className='ButtonAgregar'>
            <Button onClick={sumar}>+</Button>
            <Button onClick={agregar} disabled={cantidad===0}>Agregar</Button>
            <Button onClick={restar} disabled={cantidad===0}>-</Button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProductDetail;