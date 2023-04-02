import React from 'react';
import FilmsList from "../films-list/films-list";

const CatalogMoviePage = () : JSX.Element => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList/>
    </section>
  );
};

export default CatalogMoviePage;
