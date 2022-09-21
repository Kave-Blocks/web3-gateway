import React from "react";
import styles from "./style";

import { Navbar, Card, Hero } from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Navbar />
        </div>
      </div>

      <div className={`bg-[primary] ${styles.flexStart}`}>
        <div className={`$styles.boxWidth`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`$styles.boxWidth`}>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
