import '../stylesheets/style.css';
import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className="logo-box">
          <img src={require("../img/logo-white.png")} alt="Natours Logo" className="logo" />
        </div>

        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
      </header>
    )
  }
}

export default Header;
