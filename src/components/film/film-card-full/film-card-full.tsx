import React from 'react';
import PosterPage from "../../poster-page/poster-page";
import Header from "../../header/header/header";
import FilmCardTitle from "../film-card-title/film-card-title";
import FilmButtons from "../film-buttons/film-buttons";
import FilmCardTranslateTop from "../film-card-translate-top/film-card-translate-top";

const FilmCardFull = () => {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <PosterPage/>

        <Header/>

        <div className="film-card__wrap">
          <FilmCardTitle/>
          <FilmButtons/>
          <a href="add-review.html" className="btn film-card__button">Add review</a>
        </div>
      </div>

      <FilmCardTranslateTop />
    </section>
  );
};

export default FilmCardFull;
