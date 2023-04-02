import React from 'react';
import PosterPage from "../../poster-page/poster-page";
import Header from "../../header/header/header";
import FilmCardInfo from "../film-card-info/film-card-info";

const FilmCard = () : JSX.Element => {
  return (
    <section className="film-card">
      <PosterPage/>

      <Header/>

      <FilmCardInfo/>
    </section>
  );
};

export default FilmCard;
