import React from "react";
import { useSelector } from "react-redux";
import Author from "../component/Author";
import TimeAgo from "../component/TimeAgo";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="border p-6 rounded-md mb-7">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <TimeAgo timestamp={post.date} />
            <p className="py-4">{post.content.substr(0, 200)}....</p>
            <p className="text-sm">
              Ditulis oleh: <Author userId={post.userId} />
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
