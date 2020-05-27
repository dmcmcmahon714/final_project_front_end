import React from "react";
import commentcontainer from "./commentcontainer.js"
import CommentsMain from "./CommentsMain.js";


class AllComments extends React.Component {
  state = {
    comments: [],
  };

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3001/comments", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdComment) => createdComment.json())
      .then((jsonedComment) => {
        // add post to posts
        this.setState({
          comments: [jsonedComment, ...this.state.comments],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedComment) => {
    fetch(`http://localhost:3001/comments/${deletedComment.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const comments = this.state.comments.filter(
          (comment) => comment.id !== deletedComment.id
        );
        this.setState({ comments });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    console.log("in it to win it");
    fetch(`http://localhost:3001/comments/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedComment) => {
        // go wild
        this.getComments();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    fetch("http://localhost:3001/comments")
      .then((response) => response.json())
      .then((json) => this.setState({ comments: json }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <commentcontainer handleSubmit={this.handleAdd} post = {this.props.post} user={this.props.user} />
          <CommentsMain
            user={this.props.user}
            posts={this.props.posts}
            comments={this.state.comments}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default AllComments;