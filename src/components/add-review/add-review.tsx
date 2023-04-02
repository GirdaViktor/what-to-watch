import React from 'react';
import Rating from "../rating/rating";
import AddReviewText from "../add-review-text/add-review-text";

const AddReview = () : JSX.Element => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating/>

        <AddReviewText/>
      </form>
    </div>
  );
};

export default AddReview;
