import React from "react";
import FormContainer from "./FormContainer.js"
import Main from "./Main.js";


class AllPosts extends React.Component {
  state = {
    posts: [],
  };

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("http://localhost:3001/posts", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdPost) => createdPost.json())
      .then((jsonedPost) => {
        // add post to posts
        this.setState({
          posts: [jsonedPost, ...this.state.posts],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedPost) => {
    fetch(`http://localhost:3001/posts/${deletedPost.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const posts = this.state.posts.filter(
          (post) => post.id !== deletedPost.id
        );
        this.setState({ posts });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    console.log("in it to win it");
    fetch(`http://localhost:3001/posts/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedPost) => {
        // go wild
        this.getPosts();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <FormContainer handleSubmit={this.handleAdd} />
          <Main
            posts={this.state.posts}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default AllPosts;