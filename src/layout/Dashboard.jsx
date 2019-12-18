import React from 'react'
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import SideMenu from '../component/SideMenu';

export default function Dashboard(props) {
  const { children, ...rest } = props;
  return (
    <div className="site">
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  )
}
