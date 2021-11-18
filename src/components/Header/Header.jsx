import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>Movie App</div>
      </Link>
      <div className={styles.user_image}>
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
