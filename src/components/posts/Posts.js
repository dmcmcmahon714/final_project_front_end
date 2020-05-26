import React from "react";
import Post from "./Post.js";

function Posts(props) {
  const { handleUpdate, posts, handleDelete } = props;
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Posts;