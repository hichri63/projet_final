import React, { Component } from 'react';
import { Form, FormGroup, Input,Button } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Form className="contact-form">
                <h1 className='text-center'>Say Hello</h1>
                <h2>We are always ready to serve you</h2>

                <div>
                    <FormGroup>
                        <Input type="text" name="nom" placeholder="Votre nom" />
                        </FormGroup>
                        <FormGroup>
                              <Input  type="text" name="email" placeholder="Votre email" />
                        </FormGroup>
                      
                        <FormGroup>
                            <textarea className="message-contact"  name="message" placeholder="Votre message" />
                        </FormGroup>
            
                        <Button>Add You Message</Button>
                  

                </div>


            </Form>
        );
    }
}

export default Contact;
