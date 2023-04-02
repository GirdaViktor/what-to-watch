import React from 'react';
import FilmDescription from "../film-description/film-description";

const FilmCardInfo = () : JSX.Element => {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
               height="327"/>
        </div>

        <FilmDescription/>
      </div>
    </div>
  );
};

export default FilmCardInfo;
