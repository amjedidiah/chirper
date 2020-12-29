// Module imports
import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Nav component
 * @return {object} - The UI DOM object
 */
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
