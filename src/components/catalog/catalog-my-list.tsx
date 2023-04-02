import React from 'react';
import FilmsList from "../films-list/films-list";

const CatalogMyList = () : JSX.Element => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsList/>
    </section>
  );
};

export default CatalogMyList;
