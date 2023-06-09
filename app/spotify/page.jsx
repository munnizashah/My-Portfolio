import React from "react";
import Image from "next/image";
import spotifypic2 from "../../public/assets/projects/spotifypic2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import ProjectPage from "../../components/ProjectPage";

const spotify = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/10 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={spotifypic2}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2">
          <h2 className="py-2">Spotify Mobile App</h2>
          <h3> React </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A really fun group project re-creating a Spotify mobile version
            figma design with our own little twist. This was my first time using
            React and it was tricky to start with as I had to shift "programming
            mindset" and work with components etc. But now when I'm familiar
            with it I truly enjoy working with React and I can understand why
            it's so popular.
          </p>
          <Link target="_blank" href="https://github.com/WeActForever/clonify">
            <button className="px-8 py-2 mt-4">Github</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default spotify;
