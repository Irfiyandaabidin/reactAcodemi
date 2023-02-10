import React from "react";
import { categories } from "../utils/utility";

const SideBar = ({ selectCategory, setSelectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={i}
            className="flex p-2 items-center sm:px-5"
            style={{
              backgroundColor: selectCategory === category.name ? "red" : "white",
              color: selectCategory === category.name ? "white" : "black",
            }}
          >
            <span className="mr-1">{category.icon}</span>
            <span className="mr-1">{category.name}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
