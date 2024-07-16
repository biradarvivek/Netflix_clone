import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { MdInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className=" w-[vw] aspect-video absolute  text-white pt-[18%] p-12">
        <h1>{title}</h1>
        <p className="w-1/3 mt-4">{overview}</p>
        <div className="flex mt-8">
          <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
            <CiPlay1 size="24px" />
            <span className="ml-1">Play</span>
          </button>
          <button className="flex gap-1 items-center mx-2 px-6 py-2 bg-gray-500  bg-opacity-500 text-black rounded-md">
            <MdInfo size="24px" />
            <span className="ml-1">watch more</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
