import React from 'react';
import Review from "../../review/review";

const FilmCardReviews = () : JSX.Element => {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <Review/>
        <Review/>
        <Review/>
      </div>
      <div className="film-card__reviews-col">
        <Review/>
        <Review/>
        <Review/>
      </div>
    </div>
  );
};

export default FilmCardReviews;
