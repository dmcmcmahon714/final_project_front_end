import React from "react";
import commentform from "./commentform.js";
import {Link} from 'react-router-dom'

class comment extends React.Component {
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

  handleUpdate = (event, comment) => {
    console.log("update running");
    this.props.handleUpdate(event, comment);
    this.toggleForm();
  };



  render() {
    const { post, user, comment, handleDelete } = this.props;
    const date = new Date(comment.created_at)

    return (
      <>
        {this.state.formVisible ? (
          <commentform
            comment={comment}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className="comment">
            <h3>{comment.text}</h3>
            <p>{comment.username}</p>
            <button onClick={() => handleDelete(post)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
            <Link to='/Home'>Back Home</Link>
          </div>
        )}
      </>
    );
  }
}

export default comment;