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

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { title, content } = this.state;
    const post = {
      title: title,
      content: content
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
      <form onSubmit={this.handleSubmit}>
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