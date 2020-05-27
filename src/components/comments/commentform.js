import React from "react";
import CommentInput from "./CommentInput.js";

class commentform extends React.Component {
  state = {
    comment: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event, post) => {
    console.log(this.state);
    console.log("running");
    event.preventDefault();


    const user_id = this.props.user.id
    const username = this.props.user.username
    const comment = {
      comment: {comment},
      user_id: user_id,
      username: username,
    };

    if (this.props.post) post.id = this.props.post.id;

    this.props.handleSubmit(event, post);
  };

  componentDidMount() {
    if (this.props.comment) {
      const { comment, id } = this.props.comment;
      this.setState({
        comment: comment || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={(event)=>this.handleSubmit(event, this.props.user)}>
        <CommentInput
          handleChange={this.handleChange}
          name={"Comment"}
          placeholder={"Comment"}
          type={"text"}
          value={this.state.comment}
          id={"comment"}
        />
        <input
          type="submit"
          value={this.props.comment ? "update this comment" : "add a comment"}
        />
      </form>
    );
  }
}

export default commentform;