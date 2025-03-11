import React from "react";
import styles from "./styles/Dashboard.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
                <h1 className={styles.logo}>LAUNDRY</h1>
                <div className={styles.navLinks}>
                  <span>Pricing</span>
                  <span>Career</span>
                  <div className={styles.profile}>
                    <img
                      src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg"
                      alt="User Profile"
                      className={styles.profileImg}
                    />
                    <span>User Name</span>
                  </div>
                </div>
              </nav>
    </div>
  );
};

export default Navbar;
