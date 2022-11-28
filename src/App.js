
import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Woman from './Components/Woman';
import Cart from './Components/Cart';
import './Components/style/woman.css'


function App() {
  const [show, SetShow] = useState(true);
  const [cart, SetCart] = useState([]);
  const [warning, SetWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.Id === product.Id)
        isPresent = true;
    })
    if (isPresent) {
      SetWarning(true);
      setTimeout(() => {
        SetWarning(false);
      }, 2000);
      return;
    }
    SetCart([...cart, item]);
  }
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.Id === item.Id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    SetCart([...tempArr])
  }
  return (
    <>
      <Header size={cart.length} setShow={SetShow} />
      {
        show ? <Woman handleClick={handleClick} /> : <Cart cart={cart} setCart={SetCart} handleChange={handleChange} />
      }

      {
        warning && <div className='warning'>is already added in your cart</div>
      }
    </>
  );
}

export default App;
