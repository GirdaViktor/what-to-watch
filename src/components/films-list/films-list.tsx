import React from 'react';
import FilmCardSmall from "../film/film-card-small/film-card-small";

const FilmsList = () : JSX.Element => {
  return (
    <div className="catalog__films-list">
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
      <FilmCardSmall/>
    </div>
  );
};

export default FilmsList;
