import React from "react";
import styles from "../style";
import ellip from "../assets/ellip.png";
import ellipse from "../assets/ellipse.png";
import bitcoin from "../assets/bitcoin.png";

const Hero = () => {
  return (
    <>
      {/* <div className="outline outline-1 outline-gray-50 w-[100%] container flex"></div> */}
      <section
        id="home"
        className={`container-fluid flex md:flex-row lg:mt-10 mt-20 flex-col ${styles.paddingY} relative`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-20 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <div className="absolute z-[0] w-[30%] h-[25%] top-0 orange__gradient"></div>
            <h1 className="flex-1 font-poppins font-bold ss:text-[86px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              Learn <span className="text-orange-400">crypto</span>
              <br className="sm:block hidden" /> by doing.
            </h1>
          </div>
          <p className={` ${styles.paragraph} max-w[470px] text-white mt-16`}>
            Our goal is to onboard non crypto peeps and make them not miss these
            opportunities.
          </p>
          <button className="py-28">
            <a
              href=""
              className="text-white sm:py-[15px] sm:px-10 py-[13px] px-8 text-xl orange_button sm:hover:text-black font-medium"
            >
              Start Learning
            </a>
          </button>
        </div>

        <div>
          <img
            src={bitcoin}
            alt="bitcoin"
            className=" sm:w-[100%] sm:h[100%] w-[80%] h[80%] relative align z-[5] p-10 md:block hidden"
          />

          {/* gradient background */}
          <div className="absolute z-[0] w-[30%] h-[35%] bottom-0 orange__gradient"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
