import React from 'react';

const FilmButtons = () : JSX.Element => {
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          {/*<use xlink:href="#play-s"></use>*/}
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          {/*<use xlink:href="#add"></use>*/}
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
    </div>
  );
};

export default FilmButtons;
