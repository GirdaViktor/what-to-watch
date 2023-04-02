import React from 'react';
import FilmNav from "../../film-nav/film-nav";
import FilmRating from "../../film-rating/film-rating";
import FilmCardText from "../film-card-text/film-card-text";

const FilmCardTranslateTop = () : JSX.Element => {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
               height="327"/>
        </div>

        <div className="film-card__desc">
          <FilmNav/>

          <FilmRating/>

          <FilmCardText/>
        </div>
      </div>
    </div>
  );
};

export default FilmCardTranslateTop;
