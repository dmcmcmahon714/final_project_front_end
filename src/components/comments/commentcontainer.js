import React from 'react'
import commentform from './commentform.js'

function CommentContainer(props) {
    return (
      <aside>
        <h1>Form</h1>
        <commentform handleSubmit={props.handleSubmit} comment={props.comment} />
      </aside>
    )
}

export default CommentContainer;