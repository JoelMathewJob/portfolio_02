"use client";

import { useEffect, useRef } from "react";

// Marquee component for the background text effect
const Marquee = () => {
  return (
    <div className="absolute flex flex-col justify-between overflow-hidden z-0 py-0 text-neutral-900 ">
      {/* Line 1 - Left to Right */}
      <div className="whitespace-nowrap overflow-hidden flex items-center ">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l1-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80 ">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Line 2 - Right to Left */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l2-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Line 3 - Left to Right */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l3-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Line 4 - Right to Left */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l4-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

{/* for smaller screens */}

      {/* Line 5 - Left to Right */}
      <div className="whitespace-nowrap overflow-hidden flex items-center ">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l3-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Line 6 - Right to Left */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l4-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="whitespace-nowrap overflow-hidden flex items-center ">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l3-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>


    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Marquee Background */}
      <Marquee />

      {/* Profile Picture with Blob Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative md:h-120 md:w-120 h-80 w-80 rounded-full overflow-hidden border-4 border-primary bg-black animate-blob">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-50 animate-blob-motion"></div>
          <img
            src="/vercel.svg" // Change this to your profile image path
            alt="Joel Mathew Job"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>
    </section>
  );
}
