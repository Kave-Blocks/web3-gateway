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
        <div className="text-white md:text-5xl text-4xl font-bold p-16 text-center">
          {/* <img className="absolute" src={circle} alt="" /> */}
          <h1>Explore our Web3 Courses</h1>
        </div>

        <div className="container grid md:grid-cols-2 gap-10 text-white content-evenly">
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
      </section>
    </>
  );
}

export default Explore;
