import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <div className="logoDiv">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Link to="/"> Find Doctors </Link>
        <Link to="/"> Hospitals </Link>
        <Link to="/"> Medicines </Link>
        <Link to="/"> Surgeries </Link>
        <Link to="/"> Software for Provider </Link>
        <Link to="/"> Facilities </Link>
        <button className={styles.navbarBtn} onClick={() => {}}>
          My Bookings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
