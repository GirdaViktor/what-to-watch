import React from 'react';
import FilmCard from "../../components/film/film-card/film-card";
import PageContent from "../../components/page-content/page-content";

const MainPage = () : JSX.Element => {
  return (
    <>
      <FilmCard/>

      <PageContent/>
    </>
  );
};

export default MainPage;
