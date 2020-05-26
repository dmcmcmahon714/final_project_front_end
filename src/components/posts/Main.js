import React from "react";
import Posts from "./Posts.js";

function Main(props) {
  console.log(props);
  const { handleUpdate, handleDelete, posts } = props;
  return (
    <main>
      <Posts
        posts={posts}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;