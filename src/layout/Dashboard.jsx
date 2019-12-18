import React from 'react';
// import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import SideMenu from '../component/SideMenu';

export default function Dashboard(props) {
  const { children, ...rest } = props;
  return (
    <div className="site">
      <h1>Header</h1>
      {/* <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link> */}
      <NavLink to="/" className="menu-item-link" activeClassName="nav-selected" exact={true}>Home</NavLink> <br/>
      <NavLink to="/about" className="menu-item-link" activeClassName="nav-selected" exact={true}>About</NavLink>
      {children}
      <h1>Footer</h1>
    </div>
  )
}
