import React, { useState } from 'react';
import { useEffect } from 'react';
import './style/carts.css';



const Cart = ({cart, SetCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
      let ans = 0;
      cart.map((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }

  const handleRemove = (Id) =>{
      const arr = cart.filter((item)=>item.Id !== Id);
      SetCart(arr);
    //   handlePrice();
  }

  useEffect(()=>{
      handlePrice();
  })

return (
  <article>
      {
          cart.map((item)=>(
              <div className="cart_box" key={item.Id}>
                  <div className="cart_img">
                      <img src={item.Img} />
                      <p>{item.Img}</p>
                  </div>
                  <div>
                      <button onClick={()=>handleChange(item, +1)}> + </button>
                      <button>{item.amount}</button>
                      <button onClick={()=>handleChange(item, -1)}> - </button>
                  </div>
                  <div>
                      <span>{item.price}</span>
                      <button onClick={()=>handleRemove(item.Id)} >Remove</button>
                  </div>
              </div>
          ))}
      <div className='total'>
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
      </div>
  </article>
)
}
export default Cart