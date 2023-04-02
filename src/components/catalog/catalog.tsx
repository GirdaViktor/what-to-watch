import React from 'react';
import GenresMenu from "../genres-menu/genres-menu";
import ShowMore from "../show-more/show-more";
import FilmsList from "../films-list/films-list";

const Catalog = () : JSX.Element => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresMenu/>

      <FilmsList/>

      <ShowMore/>
    </section>
  );
};

export default Catalog;
