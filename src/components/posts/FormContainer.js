import React from 'react'
import Form from './Form.js'

function FormContainer(props) {
    return (
      <aside>
        <h1>Form</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    )
}

export default FormContainer;