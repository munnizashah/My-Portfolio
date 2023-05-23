"use client";
import { gsap } from "gsap";

import React from "react";
import Image from "next/image";
import Moni from "../public/assets/other/moni.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-300">
            I'm on my 23rd year around the sun and currently studying frontend
            development at Hyper Island.
          </p>
          <p className="py-2 text-gray-300">
            So who am I really? I would very shortly call myself a student of
            life and a creator at heart who loves bringing value to others.
            Being able to create from scratch and watch my code become a reality
            is what puts a smile on my face. Although working with code, smiles
            don't last very long when you're hunted by errors. But hunting those
            smiles keeps me going! I love to learn and evolve and truly enjoy
            being in an innovative and creative environment as that's where my
            potential blossoms.
          </p>
          <p className="py-2 text-gray-300">
            Take a look around and hit me up! Let's create some magic!{" "}
          </p>
        </div>
        <div
          className="w-[240px] h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300"
          id="myphoto"
        >
          <Image
            className="rounded-xl"
            src={Moni}
            width="200"
            height="64"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
