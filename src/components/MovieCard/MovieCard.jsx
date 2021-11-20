import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ data }) => {
  return (
    <div className={styles.card_item}>
      <div className={styles.card_inner}>
        <div className={styles.card_top}>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.card_info}>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
