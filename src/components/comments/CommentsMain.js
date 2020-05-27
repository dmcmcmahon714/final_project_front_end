import React from "react";
import comments from "./comments.js";

function CommentsMain(props) {
  console.log(props);
  const { handleUpdate, handleDelete, posts, user, comments } = props;
  return (
    <main>
      <comments
        user={user}
        posts={posts}
        comments={comments}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default CommentsMain;