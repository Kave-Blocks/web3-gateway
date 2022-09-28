import React from "react";
import styles from "../style";

const Card = () => (
  <section className="container-fluid mx-auto grid grid-rows-2 mt-20 p-10 card-test ">
    <h1 className="text-center outline_text text-gray-500 font-bold ss:text-[76px] text-[52px] ss:leading-[100px] leading-[75px]">
      MAKING IT SUPER EASY TO <br /> UNDERSTAND CRYPTO
    </h1>
    <p
      className={` ${styles.paragraph} max-w[470px]  mt-6 text-center text-gray-500`}
    >
      Get access on our network and opportunities in crypto across this
      platform. <br /> We will guide you all the way!
    </p>
    <footer className="text-gray-500">© Copyright 2022 Web3-Gateway</footer>
  </section>
);

export default Card;
