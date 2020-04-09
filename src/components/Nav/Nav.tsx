import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav: FC = () => (
  <nav className="nav">
    <div className="container">
      <NavLink
        to="/"
        exact
        className="navigation__item"
        activeClassName="navigation__item--active"
      >
        Home
      </NavLink>
      <div className="logo">
        <a href="https://www.themoviedb.org/documentation/api">
          <img
            className="logo_image"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="TMDB logo"
          />
        </a>
      </div>
    </div>
  </nav>
);
