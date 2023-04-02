import React from 'react';
import Footer from "../../components/footer/footer";
import FilmCardFull from "../../components/film/film-card-full/film-card-full";
import CatalogMoviePage from "../../components/catalog/catalog-movie-page";

const MoviePage = () : JSX.Element => {
  return (
    <>
      <FilmCardFull/>

      <div className="page-content">
        <CatalogMoviePage/>

        <Footer/>
      </div>
    </>
  );
};

export default MoviePage;
