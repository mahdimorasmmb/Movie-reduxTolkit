import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Movie App</div>
      <div>@2021, Movie inc . or its affiliates</div>
    </div>
  );
};

export default Footer;
