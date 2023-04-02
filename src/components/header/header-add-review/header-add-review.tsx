import React from 'react';
import Logo from "../../logo/logo";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import UserBlock from "../../user-block/user-block";

const HeaderAddReview = () : JSX.Element => {
  return (
    <header className="page-header">
      <Logo/>

      <Breadcrumbs/>

      <UserBlock/>
    </header>
  );
};

export default HeaderAddReview;
