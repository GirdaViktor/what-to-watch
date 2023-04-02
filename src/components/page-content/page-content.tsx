import React from 'react';
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

const PageContent = () : JSX.Element => {
  return (
    <div className="page-content">
      <Catalog/>

      <Footer/>
    </div>
  );
};

export default PageContent;
