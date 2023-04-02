import React from 'react';
import Footer from "../../components/footer/footer";
import CatalogMyList from "../../components/catalog/catalog-my-list";
import HeaderMyList from "../../components/header/header-my-list/header-my-list";

const MyList = () : JSX.Element=> {
  return (
    <div className="user-page">
      <HeaderMyList/>

      <CatalogMyList/>

      <Footer/>
    </div>
  );
};

export default MyList;
