import React from "react";
import styles from "../style";

const Card = () => (
  <section className="container-fluid mx-auto grid grid-rows-2 m-20 p-10 ">
    <h1 className="text-center outline_text text-gray-500 font-bold ss:text-[66px] text-[32px] ss:leading-[100px] leading-[75px]">
      MAKING IT SUPER EASY TO <br /> UNDERSTAND CRYPTO
    </h1>
    <p
      className={` ${styles.paragraph} max-w[470px]  mt-6 text-center text-gray-500`}
    >
      Get access on our network and opportunities in crypto across this
      platform. <br /> We will guide you all the way!
    </p>
  </section>
);

export default Card;
