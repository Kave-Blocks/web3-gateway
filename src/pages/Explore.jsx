import React from "react";
import circle from "../assets/circle.svg";
import bitcoin from "../assets/bitcoinSM.svg";
import nft from "../assets/nft.svg";
import send from "../assets/send.svg";
import wallet from "../assets/wallet.svg";
import "../index.css";

function Explore() {
  return (
    <>
      <section className="relative container-fluid p-10 m-10">
        {/* Circle Gradient */}
        <div className="absolute z-[0] w-[15%] h-[15%] right-0 top-10 orange__gradient"></div>

        <div className="text-white md:text-5xl text-4xl font-bold p-16 text-center">
          {/* <img className="absolute" src={circle} alt="" /> */}
          <h1>Explore our Web3 Courses</h1>
        </div>

        <div className="container grid md:grid-cols-2 gap-10 text-white content-evenly p-10">
          {/* Bitcoin */}
          <div className="grid grid-cols-2 gap-4 p-10 border border-gray-700 card-explore ">
            <div>
              <h1 className="text-3xl font-bold pb-5">What is bitcoin?</h1>
              <p className="pb-5 text-xl">
                "Neque porro quisquam est qui dolorem...
              </p>
              <button className="border border-orange-400 rounded-xl px-6 py-1">
                <a href="">Learn More</a>
              </button>
            </div>
            <div>
              <img className=" m-auto" src={bitcoin} alt="" />
            </div>
          </div>

          {/* Send and receive */}
          <div className="grid grid-cols-2 gap-4 p-10 border border-gray-700  card-explore">
            <div>
              <h1 className="text-3xl font-bold pb-5">
                Send and receive crypto
              </h1>
              <p className="pb-5 text-xl">
                "Neque porro quisquam est qui dolorem...
              </p>
              <button className="border border-orange-400 rounded-xl px-6 py-1">
                <a href="">Learn More</a>
              </button>
            </div>
            <div>
              <img className=" m-auto" src={send} alt="" />
            </div>
          </div>

          {/* Circle Gradient */}
          <div className="absolute z-[0] w-[20%] h-[15%] bottom-10 orange__gradient"></div>

          {/* Connect Wallet */}
          <div className="grid grid-cols-2 gap-4 p-10 border border-gray-700 card-explore ">
            <div>
              <h1 className="text-3xl font-bold pb-5">
                How to connect wallet?
              </h1>
              <p className="pb-5 text-xl">
                "Neque porro quisquam est qui dolorem...
              </p>
              <button className="border border-orange-400 rounded-xl px-6 py-1">
                <a href="">Learn More</a>
              </button>
            </div>
            <div>
              <img className=" m-auto" src={wallet} alt="" />
            </div>
          </div>

          {/* NFT */}
          <div className="grid grid-cols-2 gap-4 p-10 border border-gray-700 card-explore ">
            <div>
              <h1 className="text-3xl font-bold pb-5">What is NFT?</h1>
              <p className="pb-5 text-xl">
                "Neque porro quisquam est qui dolorem...
              </p>
              <button className="border border-orange-400 rounded-xl px-6 py-1">
                <a href="">Learn More</a>
              </button>
            </div>
            <div>
              <img className=" m-auto" src={nft} alt="" />
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center p-10">
          <button className="border border-orange-400 rounded-xl px-14 py-2 text-white text-xl card-explore">
            <a href="">Load More</a>
          </button>
        </div>

        {/* Participants Section */}
        <div className="p-10">
          <h1 className="text-white text-4xl font-bold  p-3">Participants</h1>
          <div className="border-b-2 border-slate-600 p-2"></div>
        </div>
      </section>
    </>
  );
}

export default Explore;
