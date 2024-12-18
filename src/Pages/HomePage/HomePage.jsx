import React from "react";
import Hero from "../../Components/Hero/Hero";
import Slogan from "../../Components/Slogan/Slogan";
import styles from "./HomePage.module.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaRegHospital } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { LiaAmbulanceSolid } from "react-icons/lia";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Slogan />
      <div className={styles.heroContainer}>
        <Navbar />
        <Hero />
        <div className={styles.overlay}>
          <div className={styles.searchSection}>
            <input type="text" placeholder="State" />
            <input type="text" placeholder="City" />
            <button> Search </button>
          </div>
          <div className={styles.categorySection}>
            <h3> You may be looking for</h3>
            <div className={styles.categories}>
              <CategoryCard icon={FaUserDoctor} title="Doctors" size="50" />
              <CategoryCard icon={ImLab} title="Labs" size="50" />
              <CategoryCard icon={FaRegHospital} title="Hospitals" size="50" />
              <CategoryCard
                icon={GiMedicines}
                title="Medical Store"
                size="50"
              />
              <CategoryCard
                icon={LiaAmbulanceSolid}
                title="Ambulance"
                size="50"
                color="#2aa8ff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
