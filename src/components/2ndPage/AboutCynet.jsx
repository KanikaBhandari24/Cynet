import React from "react";

export const AboutCynet = () => {
  return (
    <div className="w-full relative flex py-16 h-screen px-40 bg-green">
      <div>
        <div className="w-[40rem]">
          <h1 className="text-8xl tracking-tighter leading-[5rem] mont-bold text-[#1D392B]">
            About CYNET 2025
          </h1>
        </div>
        <div>
          <div className="w-3/4 mont-md text-black text-[1.4rem] leading-7 mt-3">
            Write a paragraph that talks about your company here. You can talk
            about your company's background, history, mission, vision, or
            philosophy. Anything that will introduce your brand's persona to
            your clients. This will help build a connection between you and
            them, that hopefully leads into a working relationship.
          </div>
          <div className="w-3/4 mont-md text-black text-[1.4rem] leading-7 mt-16">
            Write a paragraph that talks about your company here. You can talk
            about your company's background, history, mission, vision, or
            philosophy. Anything that will introduce your brand's persona to
            your clients. This will help build a connection between you and
            them, that hopefully leads into a working relationship.
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[25rem] relative bg-zinc-800 z-[2] h-[38rem] ">
            
            {/* <img src="" alt="" /> */}
        </div>
            <div className="absolute bottom-0 right-24 w-[32rem]">
                <img src="./src/assets/vector-1.png" alt="" />
            </div>
      </div>
    </div>
  );
};
