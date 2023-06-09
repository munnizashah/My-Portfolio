"use client";
import { gsap } from "gsap";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import htmll from "../public/assets/skills/htmll.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import reactjs from "../public/assets/skills/reactjs.png";
import next from "../public/assets/skills/next.png";
import tailwind from "../public/assets/skills/tailwind.png";
import github1 from "../public/assets/skills/github1.png";
import node from "../public/assets/skills/node.png";

const Skills = () => {
  const ref = useRef();
  // const allSkills = document.querySelectorAll("[id^='skill-']");
  // const theTrigger = document.getElementById("skills");
  useLayoutEffect(() => {
    const el = gsap.utils.selector(ref.current);
    const allSkills = el(`[id^='skill-']`);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "restart none none reset",
      },
      onStart: () => {
        console.log("start");
      },
    });

    tl.fromTo(
      allSkills,
      {
        y: 200,
        opacity: 0,
      },
      { y: -2, stagger: 0.06, duration: 0.25, ease: "Expo.Out", opacity: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-html"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmll} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-css"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-javascript"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascript} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-react"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactjs} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-next"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={next} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-tailwind"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-github"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github1} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div
            className="p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in duration-300"
            id="skill-node"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
