import React, { useState, useEffect } from "react";
import { fetchApi } from "../utils/fetchApi";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => setVideos(data.items));
  }, [selectCategory]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex sm:flex-col sm:justify-start sm:basis-3/12 bg-slate-200 py-5 overflow-auto ">
        <SideBar selectCategory={selectCategory} setSelectCategory={setSelectCategory} setVideos={setVideos} />
      </div>
      <div className="bg-slate-800 sm:basis-9/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
