import React from "react";
import Form from "./Form.js";

class Post extends React.Component {
  state = {
    formVisible: false,
  };

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
            <p>{post.content}</p>
            
            <button onClick={() => handleDelete(post)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Post;