import React, { useEffect } from "react";
import MovieListing from "../MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

import styles from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { addMovie } from "../../feature/movies/movieSlics";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovie(response.data));
    };

    fetchMovie();
  }, []);
  return (
    <div>
      <div>
        <div className={styles.banner_img}></div>
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
