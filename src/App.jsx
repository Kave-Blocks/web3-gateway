import React from "react";
import styles from "./style";

import { Navbar, Button, Card, Footer, GetStarted, Hero } from "./components";

function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#0F0F0F] ${styles.flexStart}`}>
        <div className={`$styles.boxWidth`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`$styles.boxWidth`}>
          <Card />
          <GetStarted />
          <Button />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;