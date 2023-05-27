import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
      const iconPath = process.env.PUBLIC_URL + '/assets/images/';
        return(
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <img src={`${iconPath}favicon.png`} alt="Logo"/>
            <span>
              ECTRO AUTOS
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/" data-toggle="collapse" data-target="#navbarSupportedContent">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" data-toggle="collapse" data-target="#navbarSupportedContent"> Products </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" data-toggle="collapse" data-target="#navbarSupportedContent"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-toggle="collapse" data-target="#navbarSupportedContent">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
        );
}
export default Navigation;