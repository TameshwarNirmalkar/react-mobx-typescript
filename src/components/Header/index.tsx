import * as React from "react";
import { Link, NavLink  } from "react-router-dom";
import "./header.scss";


export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="header-cls">
        <Link className="title-cls" to="/">React Typescript Mobx</Link>
        <ul className="ul-cls">
          <li>
            <NavLink  to="/" activeClassName="active-cls">Home</NavLink>
          </li>
          <li>
            <NavLink  to="/about" activeClassName="active-cls">About</NavLink>
          </li>
          <li>
            <NavLink  to="/contact-us" activeClassName="active-cls">Contact us</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
