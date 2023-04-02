import React from 'react';
import FilmButtons from "../film-buttons/film-buttons";
import FilmCardTitle from "../film-card-title/film-card-title";

const FilmDescription = () : JSX.Element => {
  return (
    <div className="film-card__desc">
      <FilmCardTitle/>

      <FilmButtons/>
    </div>
  );
};

export default FilmDescription;
