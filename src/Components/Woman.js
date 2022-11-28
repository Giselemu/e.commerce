import React from 'react';
import list from '../data';
import Cards from './Cards';
import './style/woman.css';
import { Modal,Button } from 'react-bootstrap';
import NewItem from './NewItem';

const Woman = ( {handleClick}, props) => {
   
    return (
        <section>
            <Modal show={props.show}>
    <Modal.Header>
        <Modal.Title>
            Add New Item
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <NewItem />
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=>props.setShow(false)} variant="secondary">
            Close Button
        </Button>
    </Modal.Footer>
   </Modal>
            {
                list.map((item) => (
               
                    < Cards item={item}       key={item.Id} handleClick={handleClick}  />
                ))


            } 
        </section>



    );
}

export default Woman