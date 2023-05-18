"use client";
import React from "react";

import skillspic from "../public/assets/projects/skillspic.png";
import spotifypic2 from "../public/assets/projects/spotifypic2.png";
import todopicfirst from "../public/assets/projects/todopicfirst.png";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={skillspic}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Spotify Mobile App"
            backgroundImg={spotifypic2}
            projectUrl="/spotify"
          />
          <ProjectItem
            title="Todo application"
            backgroundImg={todopicfirst}
            projectUrl="/todoapp"
          />
          {/* <ProjectItem
            title="Twitch"
            // backgroundImg={twitchImg}
            projectUrl="/twitch"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
