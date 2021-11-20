import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./feature/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
