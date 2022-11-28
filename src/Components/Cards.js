import React from 'react';
import '../Components/style/cards.css';
import { Modal,Button } from 'react-bootstrap';
import Header from './Header';
import NewItem from './NewItem';

const Cards = ({ item , handleClick}) => {
    const { Id, title,description, date, price, category, status, Img, amount } = item;
    return (
        <section>
        < div className='cards'>
            <div className='image-box'>
                <img src={Img} alt="image" />
            </div>
            <div className='details'>
                <p>{Id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{date}</p>
                <p>price-{price}$</p>
                <p>{category}</p>
                <p>{status}</p>
                <p> {amount}</p>
                <button onClick={()=>handleClick(item)} >Add to Cart</button>
            </div>
            
        </div>
        </section>
    )
}

export default Cards