import React from 'react'
import Form from './Form.js'

function FormContainer(props) {
    return (
      <aside>
        <Form handleSubmit={props.handleSubmit} user={props.user} />
      </aside>
    )
}

export default FormContainer;