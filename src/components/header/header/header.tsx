import React from 'react';
import UserBlock from "../../user-block/user-block";
import Logo from "../../logo/logo";

const Header = () : JSX.Element => {
  return (
    <header className="page-header film-card__head">
      <Logo/>

      <UserBlock/>
    </header>
  );
};

export default Header;
