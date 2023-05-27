import React from "react";


const Footer = () => {
    return(
    <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6 footer-col">
          <div className="footer_detail">
            <h4>
              About
            </h4>
            <p>
            Welcome to EctroAutos, your number one source for all things Emergency Vehicle Lighting Solution. We're dedicated to giving you the very best of lights, with a focus on High Quality Lights
Founded in 2015 by Hosen Ansari.
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <div className="footer_social">
              <a href="https://www.facebook.com/pages/Ectro-Autos/104260694677737">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/917012394057">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/ectro_autos/?hl=en">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 footer-col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href="https://goo.gl/maps/ReRZrG6RWaEBD3AZA">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="tel:+917012394057">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +91 7012394057
                </span>
              </a>
              <a href="mailto:ectroautos@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  ectroautos@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>
          &copy; <span >2022</span> All Rights Reserved By
          <a href="https://microredsolutions.in" target="_blank"> Micro Red Solutions</a>
        </p>
      </div>
    </div>
  </footer>
        );
    }

export default Footer;