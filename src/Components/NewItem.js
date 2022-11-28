import { Form, Button } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react'

const NewItem = ({onAdd}) => {

const [items, setItems]=useState({Id:"",Title:"",description:"",date:"",price:"",category:"",Status:"",img:""})
const ChangeItem=(e) =>{
setItems({...items,[e.target.Id]:e.target.value})

}

const addItem=()=>{
setItems({...items,items})
}
 

    return (

        <Form >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ID"
                    onChange={ChangeItem}
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={ChangeItem}

                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="description"
                    onChange={ChangeItem}
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="date"
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="price"
                     onChange={ChangeItem}
                />
            </Form.Group>
            <br></br>
            <Form.Group>

            <label>category</label>
                <select class="form-select" aria-label="Default select example"> onChange={ChangeItem}
                    <option selected>linginier</option> 
                    <option value="1">Small size</option> 
                    <option value="2">Medium size</option>
                    <option value="3">Big size</option>
                  </select>

            </Form.Group>
            <br></br>
            <Form.Group  form-control-check title="status"> onChange={ChangeItem}
                <h4>Status</h4>
                {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            label="Available"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            label="Temporary Not Available in store"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            />
            <Form.Check
            label="Not in store"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        
        </div>
      ))}
   
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="file"
                    placeholder="picture"
                    onChange={ChangeItem}
                />
            </Form.Group>
            <br></br>
            <Button onClick={addItem} variant="success" type="submit" block>
                SAVE NEW ITEM
            </Button>
        </Form>

    )
}

export default NewItem