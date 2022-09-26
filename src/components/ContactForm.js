import React, { useState } from 'react'
import {Button, IconButton, TextInput, FormField, TextareaField} from "evergreen-ui"
import Collapsible from 'react-collapsible'
// add overlay when form pops up

const ContactForm = () => {


    const [newForm, setForm] = useState({
        name: "",
        email: "",
        message: "" 
        });
        
        const handleSubmit = (e) => {
            e.preventDefault();
    }
return (
    <div>
        <Button appearance="minimal" buttonAfter="EnvelopeIcon">
            <Collapsible trigger='Contact Me'>
            <FormField Label="Enter your Name:">
                <TextInput
                    onChange={ (e) => setForm.name(e.target.value)}
                    />
            </FormField>
            <FormField Label="Enter your Email:">
                <TextInput
                    onChange={ (e) => setForm.email(e.target.value)}
                    /> 
            </FormField>
            <FormField Label="Enter your Message:">
                <TextareaField
                    onChange={ (e) => setForm.message(e.target.value)}
                    /> 
            </FormField>
            </Collapsible>
        </Button>
    </div>
)
}



export default  ContactForm




// 
//  }
// return (
//  <div>
//      

//  </div>
// )