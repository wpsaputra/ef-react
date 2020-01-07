import React from 'react';
// import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Appbar from '../components/Appbar';
import Sidemenu from '../components/Sidemenu';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import SideMenu from '../component/SideMenu';


export default function Dashboard(props) {
  const { children, ...rest } = props;
  return (
    <div className="site">
      <Appbar/>
      <div style={{width: "100%", height: "calc(100vh - 32px)"}}>
        <div className="body-drag-region"></div>
        <div style={{width: "100%", height: "100%", display:"flex"}}>
          <Sidemenu />
          {/* <div style={{width: "100px", height:"100%", backgroundColor: "#252526"}}></div> */}

        </div>
        {/* <h1 style={{color: "white", fontFamily: "codicon"}}>Tes</h1> */}
        {/* <h1 style={{color: "white", fontFamily: "codicon"}}>\eaf0</h1>
        <h1 style={{color: "white", fontFamily: "codicon"}}>&#xEAF0;</h1> */}
      </div>
      {/* <NavLink to="/" className="menu-item-link" activeClassName="nav-selected" exact={true}>Home</NavLink> <br/>
      <NavLink to="/about" className="menu-item-link" activeClassName="nav-selected" exact={true}>About</NavLink>
      {children} */}
    </div>
  )
}
