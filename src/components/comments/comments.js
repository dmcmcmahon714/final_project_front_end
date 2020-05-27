import React from "react";
import comment from "./comment.js";

function Comments(props) {
  const { handleUpdate, post, handleDelete, user, comments } = props;
  return (
    <div>
      {comments.map((comment) => (
        <comment
          key={comment.id}
          post={post}
          comment={comment}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Comments;