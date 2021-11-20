import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../feature/movies/movieSlics";
import MovieCard from "../MovieCard";
import styles from "./MovieListing.module.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((item) => <MovieCard key={item.Title} data={item} />)
    ) : (
      <div className={styles.movie_error}>
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className={styles.movie_wrapper}>
      <div className={styles.movie_list}>
        <h2>Movies</h2>
        <div className={styles.movie_container}>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
