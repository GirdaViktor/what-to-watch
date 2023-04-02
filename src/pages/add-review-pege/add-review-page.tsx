import React from 'react';
import HeaderAddReview from "../../components/header/header-add-review/header-add-review";
import AddReview from "../../components/add-review/add-review";
import PosterPage from "../../components/poster-page/poster-page";

const AddReviewPage = () => {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <PosterPage/>

        <HeaderAddReview/>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
               height="327"/>
        </div>
      </div>

      <AddReview/>
    </section>
  );
};

export default AddReviewPage;
