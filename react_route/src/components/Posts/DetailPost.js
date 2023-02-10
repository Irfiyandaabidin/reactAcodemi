import React from "react";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  const params = useParams();

  return (
    <div>
      <h1>Judul Post {params.postId}</h1>
      <p>Detail Post {params.postId}</p>
    </div>
  );
};

export default DetailPost;
