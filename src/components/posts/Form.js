import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event, user) => {
    console.log(this.state);
    console.log("running");
    event.preventDefault();

    const { title, content } = this.state;
    const user_id = this.props.user.id
    const username = this.props.user.username
    const post = {
      title: title,
      content: content,
      user_id: user_id,
      username: username,
    };

    if (this.props.post) post.id = this.props.post.id;

    this.props.handleSubmit(event, post);
  };

  componentDidMount() {
    if (this.props.post) {
      const { title, content, id } = this.props.post;
      this.setState({
        title: title || "",
        content: content || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={(event)=>this.handleSubmit(event, this.props.user)}>
        <Input
          handleChange={this.handleChange}
          name={"title"}
          placeholder={"Title"}
          type={"text"}
          value={this.state.title}
          id={"title"}
        />
        <Input
          handleChange={this.handleChange}
          name={"content"}
          placeholder={"Content"}
          type={"text"}
          value={this.state.content}
          id={"author"}
        />
        <input
          type="submit"
          value={this.props.post ? "update this post" : "add a post"}
        />
      </form>
    );
  }
}

export default Form;