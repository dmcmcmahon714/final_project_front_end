import React from "react";
import Form from "./Form.js";
import {Link} from 'react-router-dom'
import {Button} from "react";

class Post extends React.Component {
  state = {
    formVisible: false,
  };

formatter = new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        });


  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, post) => {
    console.log("update running");
    this.props.handleUpdate(event, post);
    this.toggleForm();
  };



  render() {
    const { post, user, handleDelete } = this.props;
    const date = new Date(post.created_at)

    return (
      <>
        {this.state.formVisible ? (
          <Form
            post={post}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="post">
            <h3>{post.title}</h3>
            <p className="content">{post.content}</p>
            <p className="info">time: {post.created_at}</p>
            <p className="info">posted by:{post.username}</p>
            <button onClick={() => handleDelete(post)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
           
          </div>
        )}
      </>
    );
  }
}

export default Post;