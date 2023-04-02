import React from 'react';
import FilmButtons from "../film-buttons/film-buttons";

const FilmDescription = () : JSX.Element => {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">The Grand Budapest Hotel</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">Drama</span>
        <span className="film-card__year">2014</span>
      </p>

      <FilmButtons/>
    </div>
  );
};

export default FilmDescription;
