import React from "react";
import Post from "./Post.js";

function Posts(props) {
  const { handleUpdate, posts, handleDelete, user } = props;
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          user={user}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Posts;