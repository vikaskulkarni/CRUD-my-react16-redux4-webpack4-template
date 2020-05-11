import React from "react";
import "./header.scss";
import crudImg from "./crud.png";

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="headerCls px-4">
        <h1>
          <a href="#">Dynamic</a>
        </h1>
        <img src={crudImg} width="200" alt="Heading" />
        <button type="button" className="btn btn-info btn-circle btn-xl">
          <i className="fa fa-plus"></i>
        </button>
        <nav
          id="navbar-primary"
          className="navbar navbar-expand-lg navbar-default"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            {/* <div
              className="collapse navbar-collapse"
              id="navbar-primary-collapse"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item mr-3">
                  <NavLink className="btn btn-outline-info" exact to="/">
                    Contacts List
                  </NavLink>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
