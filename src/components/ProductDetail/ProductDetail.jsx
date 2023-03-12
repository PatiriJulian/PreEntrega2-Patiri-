import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductDetail.css';


function ProductDetail(props) {
  const [cantidad, setCantidad]=useState(0);
  const sumar=()=>{
    setCantidad(cantidad+1)
  }
  const restar=()=>{
    setCantidad(cantidad-1)
  }
  return (
    <Card className="CardItem" >
      <Card.Img variant="top" src={props.item.pic} />
      <Card.Body>
        <Card.Title  class= "CardTitle">{props.item.name}</Card.Title>
        <Card.Text class= "CardText">
          <p>Categoria {props.item.category}</p><p>Precio ${props.item.price}</p>
        </Card.Text>
          <Button onClick={restar} disabled={cantidad===0}>-</Button>
          <Button>Agregar</Button>
          <Button onClick={sumar}>+</Button>
          <i>{cantidad}</i>
          
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;