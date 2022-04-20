import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { InputGroup, FormControl, Navbar, Button } from 'react-bootstrap'

function Reorder() {
    return (<div className="reorder">


<InputGroup style={{width: "40%", marginLeft:"30%" , marginTop:"2%"}}>
        <InputGroup.Prepend >
          <InputGroup.Text id="inputGroup-sizing-default">Product Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup style={{width: "40%", marginLeft:"30%", marginTop:"2%" }}>
        <InputGroup.Prepend >
          <InputGroup.Text id="inputGroup-sizing-default">Product ID</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup style={{width: "40%", marginLeft:"30%" , marginTop:"2%"}}>
        <InputGroup.Prepend >
          <InputGroup.Text id="inputGroup-sizing-default">Quantity</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup style={{width: "40%", marginLeft:"30%" , marginTop:"2%"}}>
        <InputGroup.Prepend >
          <InputGroup.Text id="inputGroup-sizing-default">Date Of Re-Order</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup style={{width: "40%", marginLeft:"30%" , marginTop:"2%"}}>
        <InputGroup.Prepend >
        <a href="mailto:email@address.com?subject=Hello world&body=Line one%0DLine two">Email me</a>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>


      <Button style={{marginLeft:"80%",marginTop:"2%"}}>Order</Button>





    </div>


    );
}

export default Reorder;