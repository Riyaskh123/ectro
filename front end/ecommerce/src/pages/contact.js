import React from "react";

const Contact = () => {
  const iconPath = process.env.PUBLIC_URL + '/assets/images/';
  return (
    <div className="contact">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <img src={`${iconPath}contact.png`} style={{ width: '100%' }} />
          </div>
          <div className="column">
            <div className="social">
            <ul>
              <li>
                <a href="https://www.facebook.com/pages/Ectro-Autos/104260694677737" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span> - Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917012394057" target="_blank">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  <span> - Whatsapp</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ectro_autos/?ighid=YmMyMTA2M2Y=" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <span> - Instagram</span>
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;