import React from 'react';

const Review = () : JSX.Element => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content
          is a little more adult.</p>

        <footer className="review__details">
          <cite className="review__author">Paula Fleri-Soler</cite>
          <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">7,0</div>
    </div>
  );
};

export default Review;
