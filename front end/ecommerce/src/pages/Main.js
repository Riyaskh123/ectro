
import React from 'react';
import ProductList from './products/ProductList' 
import HeroArea from './heroArea';

const Main = () => {
    const iconPath = process.env.PUBLIC_URL + '/assets/images/';
     return(
    <div>
      <HeroArea />
      <ProductList />
  <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 col-lg-5 ">
          <div className="img-box">
            <img src={`${iconPath}about-img.png`} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
            At Ectro Autos, we understand the crucial role that emergency vehicle lighting plays in the effective operation of first responders. With years of experience in the industry, we have established ourselves as a leading provider of high-performance lighting solutions for emergency vehicles. Our team of experts is dedicated to designing, manufacturing, and supplying state-of-the-art lighting products that meet the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="feature_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Features Of Our Products
        </h2>
        <p>
         It's enhanced by the customer's disappointment, but We give it some time to cut down on it with great pain and pain.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src={`${iconPath}f1.png`} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                High Quality
              </h5>
              <p>
                Providing High Quality BarLights & Siren Products
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src={`${iconPath}f2.png`} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                High Brightness
              </h5>
              <p>
                Intensity of Lights are High for all Light Products
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src={`${iconPath}f3.png`} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Good Service
              </h5>
              <p>
              Providing timely, attentive, upbeat services
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src={`${iconPath}f4.png`} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Customer Satisfaction
              </h5>
              <p>
               Happy customers are in with products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>)
}
export default Main;

