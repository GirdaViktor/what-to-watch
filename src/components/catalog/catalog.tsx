import React from 'react';
import GenresMenu from "../genres-menu/genres-menu";
import FilmCardSmall from "../film/film-card-small/film-card-small";
import ShowMore from "../show-more/show-more";

const Catalog = () : JSX.Element => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresMenu/>

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

      <ShowMore/>
    </section>
  );
};

export default Catalog;
