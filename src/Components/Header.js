import React from 'react';
import '../Components/style/header.css';
import { Modal, Button } from 'react-bootstrap';

const Header = ({size, setShow}) =>{
  const handleShow = () =>setShow(true);
  const handleClose = () =>setShow(false);
  return (
<nav>
<div className="header-bar">
<span className="myShop"onClick={()=>setShow(true)}>
    potrait Shop
</span>
<div className="cart"onClick={()=>setShow(false)}>
    <span>
   
        <i className="fas fa-cart-plus">  </i>
      
    </span>
    <h1>{size}</h1>
    <span>
    <Button className='btn'onClick={handleShow}>ADD NEW ITEM</Button>
    </span>
</div>





</div>
</nav>
  )
}

export default Header