import React from 'react'
import { Form, Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";


const LeftSide = () => {

    
    
    
    return (
        <section class="form" >
            
                <div >
                   
                <Form style ={{width:"80%", marginLeft:"10%",marginTop:"20%"}}>
                    <Form.Group >
                        <Form.Label>
                            Enter User ID
                    </Form.Label>
                        <Form.Control type="email" placeholder="User ID" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Enter User Password
                    </Form.Label>
                        <Form.Control type="password" placeholder="Enter User Password" />
                    </Form.Group>
                    <Button to="/Menu" type="submit" >Log in</Button>
                </Form>

                 
                


                </div>
            
            
        </section>
    )
}

export default LeftSide;
