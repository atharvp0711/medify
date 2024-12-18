import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../Assets/hero.png";
// import Navbar from "../../Components/Navbar/Navbar";

const Hero = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.hero}>
        <div className={styles.headline}>
          <div className={styles.headings}>
            <h2>Skip the travel! Find Online</h2>
            <h1> Medical Centres</h1>
          </div>
          <div className={styles.para}>
            <p>Connect instantly with a 24x7 specialist or choose to </p>
            <p>video visit a particular doctor.</p>
          </div>
          <button className={styles.centresBtn}> Find Centres </button>
        </div>
        <div className={styles.heroImg}>
          <img
            src={HeroImage}
            alt="heroImage"
            style={{ width: "20rem", height: "30rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
